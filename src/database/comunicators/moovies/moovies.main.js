const { ipcMain } = require("electron");
const { Moovie } = require("../../models/moovies");
const { Op } = require("sequelize");

const findTheMoovies = async (title = "", year = "", limit = 0, offset = 0) => {
    console.log("Fetching Moovies");
    const data = await Moovie.findAll({
        order: [
            ["year", "DESC"],
            ["title", "ASC"],
        ],
        where: {
            title: {
                [Op.like]: `%${title}%`,
            },
            year: {
                [Op.like]: `%${year}%`,
            },
        },
        limit: limit,
        offset: offset,
    });

    const count = await Moovie.count({
        where: {
            title: {
                [Op.like]: `%${title}%`,
            },
            year: {
                [Op.like]: `%${year}%`,
            },
        },
    });

    console.table({ data });

    return { data, count };
};

ipcMain.on("moovies-communication", async (event, args) => {
    console.log({ args });
    if (args.message === "find") {
        console.log("SEARCHING");
        const data = await findTheMoovies(
            args.title,
            args.year,
            args.limit,
            args.offset
        );
        event.reply("fetched-moovies", data);
    } else event.reply("no-event");
    if (args.message === "findOne") {
        console.log("SEARCHING BY ID");
        const data = await Moovie.findByPk(args.id);
        event.reply("fetched-moovie", data);
    }
    if (args.message === "fetchMoovieData") {
        console.log("Searching moovie online data");
        console.log({ args });
        const data = await getMoovieOnlineData(args.link);
        event.reply("scrapped-data", data);
    }
});

const cheerio = require("cheerio");
const axios = require("axios");

const getMoovieOnlineData = async (moovieLink = "") => {
    console.log(`FETCHING MOOVIE LINK: ${moovieLink}`);
    const response = await axios.get(moovieLink);
    const html = response.data;

    const $ = cheerio.load(html);
    const linkObjects = $("a");
    //console.log(linkObjects);

    const SCRAPPED_LINKS = [];
    //linkObjects.splice();

    //linkObjects = linkObjects.splice(4);
    //console.log({ linkObjects });

    linkObjects.splice(5).forEach((element, index) => {
        let text = $(element).text();

        const textSlices = text.split(".");
        let fixedText = "";

        for (let i = 0; i < textSlices.length - 1; i++) {
            const spaceAtEnd = i === textSlices.length - 2 ? "" : " ";
            fixedText += textSlices[i] + spaceAtEnd;
        }
        fixedText.trimEnd();
        fixedText += `.${textSlices[textSlices.length - 1]}`;
        //while (text.includes(".")) {
        //text = text.replace(".", " ");
        //}
        //text = text.replace("/", "");
        //text = text.trim();

        SCRAPPED_LINKS.push({
            text: text, // get the text
            fixedText,
            //year: $(element).text().substring(0, 4),
            //href: $(element).attr("href"), // get the href attribute
            link: `${moovieLink}${$(element).attr("href")}`,
        });
    });

    console.table(SCRAPPED_LINKS);

    return SCRAPPED_LINKS;
};

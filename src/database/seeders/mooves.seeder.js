const { Moovie } = require("../models/moovies");

const cheerio = require("cheerio");
const axios = require("axios");

const URL = "https://visuales.uclv.cu/Peliculas/Extranjeras/2022/";

const extractLinks = async (url = URL) => {
    try {
        // Fetching HTML
        console.log(`Fetching: ${url}`);
        const response = await axios.get(url);
        console.log({ response });
        const html = response.data;

        // Using cheerio to extract <a> tags
        const $ = cheerio.load(html);

        const linkObjects = $("a");
        // this is a mass object, not an array

        // Collect the "href" and "title" of each link and add them to an array
        var ScrappedLinks = [];

        linkObjects.each((index, element) => {
            let text = $(element).text().substring(5);
            while (text.includes(".")) {
                text = text.replace(".", " ");
            }
            text = text.replace("/", "");
            text = text.trim();

            ScrappedLinks.push({
                title: text, // get the text
                year: $(element).text().substring(0, 4),
                //href: $(element).attr("href"), // get the href attribute
                link: `${url}${$(element).attr("href")}`,
            });
        });

        ScrappedLinks = ScrappedLinks.splice(5);

        console.log(`Fetched ${ScrappedLinks.length} items`);
        return ScrappedLinks;
    } catch (error) {
        console.log({ error });
    }
};

const seedMoovies = async () => {
    const items = await extractLinks();
    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        console.log(`Creating: ${item.title}`);
        const moovie = await Moovie.findOrCreate({
            where: {
                title: item.title,
            },
            defaults: {
                ...item,
            },
        });
    }
};

module.exports = {
    extractLinks,
    seedMoovies,
};

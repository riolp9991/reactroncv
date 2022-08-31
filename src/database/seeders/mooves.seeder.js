const { Moovie } = require("../models/moovies");

const cheerio = require("cheerio");
const axios = require("axios");

const URL = "https://visuales.uclv.cu/Peliculas/Extranjeras/2022/";

const extractLinks = async (url = URL) => {
    try {
        // Fetching HTML
        console.log(`Fetching: ${url}`);
        const response = await axios.get(url);
        //console.log({ response });
        const html = response.data;

        // Using cheerio to extract <a> tags
        const $ = cheerio.load(html);

        const linkObjects = $("a");
        // this is a mass object, not an array

        // Collect the "href" and "title" of each link and add them to an array
        let ScrappedLinks = [];

        linkObjects.each((index, element) => {
            let text = $(element).text().substring(5);
            while (text.includes(".")) {
                text = text.replace(".", " ");
            }
            text = text.replace("/", "");
            text = text.trim();

            while (text.includes("_")) {
                text = text.replace("_", " ");
            }

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

const MINOR_YEAR = 2000;

const seedMoovies = async () => {
    const BASE_URL = "https://visuales.uclv.cu/Peliculas/Extranjeras/";

    const items = await extractLinks(BASE_URL);
    for (let index = 0; index < items.length; index++) {
        const item = items[index];

        const year = parseInt(
            item.link.split("/")[item.link.split("/").length - 2]
        );

        if (!year || year < MINOR_YEAR) continue;

        console.log(`LINK: ${item.link}`);

        const MoviesOfItem = await extractLinks(item.link);

        for (let i = 0; i < MoviesOfItem.length; i++) {
            try {
                const moovieData = MoviesOfItem[i];

                if (
                    !parseInt(moovieData.year) ||
                    parseInt(moovieData.year) < MINOR_YEAR
                )
                    continue;

                const moovie = await Moovie.findOrCreate({
                    where: {
                        title: item.title,
                        year: item.year,
                        link: moovieData.link,
                    },
                    defaults: {
                        ...moovieData,
                    },
                });
            } catch (error) {
                console.error({ error });
            }

            //moovie.save();
        }

        console.log(`YEAR: ${year}`);
    }
};

module.exports = {
    extractLinks,
    seedMoovies,
};
module.exports = {
  extractLinks,
  seedMoovies,
};

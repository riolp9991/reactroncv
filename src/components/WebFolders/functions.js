import axios from "axios";
//import { Cheerio as cheerio } from "cheerio";
const cheerio = require("cheerio");

export const getLinks = async (link = "") => {
    const response = await axios.get(link);

    if (!response.data) return [];

    const html = response.data;
    console.log({ html });

    const $ = cheerio.load(html);

    const links = $("a");

    let scrappedLinks = [];

    links.each((_, element) => {
        let text = $(element).text().substring(5);
        while (text.includes(".")) {
            text = text.replace(".", " ");
        }
        text = text.replace("/", "");
        text = text.trim();

        scrappedLinks.push({
            title: text, // get the text
            link: `${link}${$(element).attr("href")}`,
        });
    });

    return scrappedLinks;
};

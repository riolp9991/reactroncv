const { ipcMain, shell } = require("electron");

const cheerio = require("cheerio");
const axios = require("axios");

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
        let ScrappedLinks = [];

        linkObjects.each((index, element) => {
            let text = $(element).text();
            while (text.includes(".")) {
                text = text.replace(".", " ");
            }
            text = text.replace("/", "");
            text = text.trim();

            ScrappedLinks.push({
                text: text, // get the text
                //year: $(element).text().substring(0, 4),
                //href: $(element).attr("href"), // get the href attribute
                link: `${url}${$(element).attr("href")}`,
            });
        });

        ScrappedLinks = ScrappedLinks.splice(4);

        console.log(`Fetched ${ScrappedLinks.length} items`);
        return ScrappedLinks;
    } catch (error) {
        console.log({ error });
    }
};

ipcMain.on("links-communication", async (event, args) => {
    console.log({ args });
    if (args.message === "open") {
        shell.openExternal(args.url);
        event.reply("linked", "opened the link");
    } else if (args.message === "scrap-links") {
        console.log("GETTING LINKS");
        const data = await extractLinks(args.url);
        console.log(data);
        event.reply("links-fetched", data);
    } else event.reply("no-event");
});

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

            const textSlices = text.split(".");
            let fixedText = "";

            for (let i = 0; i < textSlices.length - 1; i++) {
                const spaceAtEnd = i === textSlices.length - 2 ? "" : " ";
                fixedText += textSlices[i] + spaceAtEnd;
            }
            fixedText.trimEnd();
            fixedText += `.${textSlices[textSlices.length - 1]}`;

            console.log({ index });
            const linkFIxxed =
                index == 4
                    ? `https://visuales.uclv.cu/${$(element).attr("href")}`
                    : `${url}${$(element).attr("href")}`;
            console.log({ linkFIxxed });

            ScrappedLinks.push({
                text: fixedText, // get the text
                link: linkFIxxed,
            });
        });

        ScrappedLinks = ScrappedLinks.splice(4);

        //console.log(`Fetched ${ScrappedLinks.length} items`);
        return ScrappedLinks;
    } catch (error) {
        console.log({ error });
    }
};

ipcMain.on("links-communication", async (event, args) => {
    //console.log({ args });
    if (args.message === "open") {
        shell.openExternal(args.url);
        event.reply("linked", "opened the link");
    } else if (args.message === "scrap-links") {
        //console.log("GETTING LINKS");
        const data = await extractLinks(args.url);
        //console.log(data);
        event.reply("links-fetched", data);
    } else event.reply("no-event");
});

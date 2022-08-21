const { ipcMain } = require("electron");
const { Moovie } = require("../../models/moovies");
const { Op } = require("sequelize");

const findTheMoovies = async (title = "", year = "") => {
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
    });

    const count = await Moovie.count();

    return { data, count };
};

ipcMain.on("moovies-communication", async (event, args) => {
    console.log({ args });
    if ((args.message = "find")) {
        console.log("SEARCHING");
        const data = await findTheMoovies(args.title, args.year);
        event.reply("fetched-moovies", data);
    } else event.reply("no-event");
});

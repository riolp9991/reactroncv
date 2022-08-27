const { ipcMain } = require("electron");
const { Moovie } = require("../../models/moovies");
const { Op } = require("sequelize");

const findTheMoovies = async (
    title = "",
    year = "",
    link = "",
    limit = 0,
    offset = 0
) => {
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

    return { data, count };
};

ipcMain.on("moovies-communication", async (event, args) => {
    console.log({ args });
    if ((args.message = "find")) {
        console.log("SEARCHING");
        const data = await findTheMoovies(
            args.title,
            args.year,
            args.limit,
            args.offset
        );
        event.reply("fetched-moovies", data);
    } else event.reply("no-event");
});

const electron = window.require("electron");
const { ipcRenderer } = electron;

export const findMoovies = (title = "", year = "", page = 1) => {
    const limit = 32;
    return new Promise((resolve) => {
        ipcRenderer.once("fetched-moovies", (_, args) => {
            resolve(args);
            console.log(args);
        });
        ipcRenderer.send("moovies-communication", {
            message: "find",
            title: title,
            year: year,
            limit,
            offset: (page - 1) * limit,
        });
    });
};

export const findById = (id = 1) => {
    return new Promise((resolve) => {
        ipcRenderer.once("fetched-moovie", (_, args) => {
            resolve(args);
        });

        ipcRenderer.send("moovies-communication", {
            message: "findOne",
            id: id,
        });
    });
};

export const scrapMoovieData = (link = "") => {
    return new Promise((resolve) => {
        ipcRenderer.once("scrapped-data", (_, args) => {
            resolve(args);
        });

        ipcRenderer.send("moovies-communication", {
            message: "fetchMoovieData",
            link: link,
        });
    });
};

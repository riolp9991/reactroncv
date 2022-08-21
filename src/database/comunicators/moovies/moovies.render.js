const electron = window.require("electron");
const { ipcRenderer } = electron;

export const findMoovies = (title = "", year = "", limit = 32, page = 1) => {
    return new Promise((resolve) => {
        ipcRenderer.once("fetched-moovies", (_, args) => {
            resolve(args);
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

const electron = window.require("electron");
const { ipcRenderer } = electron;

export const findMoovies = (title = "", year = "") => {
    return new Promise((resolve) => {
        ipcRenderer.once("fetched-moovies", (_, args) => {
            resolve(args);
        });
        ipcRenderer.send("moovies-communication", {
            message: "find",
            title: title,
            year: year,
        });
    });
};

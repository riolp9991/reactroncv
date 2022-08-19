const electron = window.require("electron");
const { ipcRenderer } = electron;

export const openLink = (link) => {
    return new Promise((resolve) => {
        ipcRenderer.once("linked", (_, args) => {
            resolve(args);
        });
        ipcRenderer.send("links-communication", {
            message: "open",
            url: link,
        });
    });
};

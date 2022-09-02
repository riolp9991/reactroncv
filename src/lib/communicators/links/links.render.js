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

export const getLinks = (link) => {
  return new Promise((resolve, reject) => {
    try {
      ipcRenderer.once("links-fetched", (_, args) => {
        console.log("LINKS");
        console.log({ args });
        resolve(args);
      });
      ipcRenderer.once("ERROR", (_, args) => {
        throw "ERRORORRORO";
      });
      ipcRenderer.send("links-communication", {
        message: "scrap-links",
        url: link,
      });
    } catch (error) {
      console.error({ error });
      throw error;
    }
  });
};

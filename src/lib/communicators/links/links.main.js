const { ipcMain, shell } = require("electron");

ipcMain.on("links-communication", async (event, args) => {
    console.log({ args });
    if ((args.message = "open")) {
        shell.openExternal(args.url);
        event.reply("linked", "opened the link");
    } else event.reply("no-event");
});

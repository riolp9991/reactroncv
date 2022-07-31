const {ipcMain} = require('electron');
const {User} = require('../models/profiles')

ipcMain.on('users-comunication', async (event, arg) => {
  console.log({arg}); // prints "ping"
  if (arg === 'ping') event.reply('asynchronous-reply', 'pong!');
  if (arg.message === 'create') {
    console.log('Hello World')

    const test = User.build({...arg.data})
    await test.save()

    event.reply('created-user', test)
  }
}); 

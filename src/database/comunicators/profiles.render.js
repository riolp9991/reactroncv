const electron = window.require('electron');
const {ipcRenderer} = electron;

export function send(message) {
    return new Promise((resolve) => {
        ipcRenderer.once('asynchronous-reply', (_, arg) => {
            resolve(arg);
        });
        ipcRenderer.send('users-comunication', message);
    });
}

export function createUser({firstName, lastName}) {
    return new Promise((resolve) => {
        ipcRenderer.once('created-user', (_, arg) => {
            resolve(arg);
        });
        ipcRenderer.send('users-comunication', {
            message: 'create',
            data: {
                firstName, lastName
            }
        });
    });
}


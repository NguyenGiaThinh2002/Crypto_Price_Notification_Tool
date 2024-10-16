const { app, BrowserWindow, ipcMain, dialog, Menu } = require('electron');
const path = require('path');
const { spawn } = require('child_process');
const net = require('net');

function createWindow() {
    const win = new BrowserWindow({
        width: 780,
        height: 450,
        resizable: true,
        icon: path.join(__dirname, 'pricing.ico'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
        },
        frame: true, 
        scroll: true
    });

    win.loadFile('index.html');

    Menu.setApplicationMenu(null);
}


app.whenReady().then(() => {
    createWindow();
    // let dotNetAppPath;
    // if (app.isPackaged) {
    //     dotNetAppPath = path.join('C:\\Program Files\\Notify Crypto Currency Price Software', 'EncriptionAPP', 'MyConsoleApp.exe');
    // } 
    // else 
    // {
    //     dotNetAppPath = path.join(__dirname, 'EncriptionAPP/MyConsoleApp/bin/Release/net8.0/MyConsoleApp.exe');
    // }
    // console.log(dotNetAppPath)

    // const dotNetProcess = spawn(dotNetAppPath);


    // dotNetProcess.stdout.on('data', (data) => {
    //     console.log(`.NET App Output: ${data}`);
    // });


    // dotNetProcess.stderr.on('data', (data) => {
    //     console.error(`.NET App Error: ${data}`);
    // });

    // dotNetProcess.on('close', (code) => {
    //     console.log(`.NET App exited with code ${code}`);
    // });
});


// ipcMain.handle('dialog:openDirectory', async () => {
//     const result = await dialog.showOpenDialog({
//         properties: ['openDirectory'],
//     });
//     return result.filePaths[0]; 
// });

// ipcMain.on('send-uuid', (event, uuid) => {
//     const client = new net.Socket();
//     client.connect(5000, '127.0.0.1', () => {
//         console.log("Connected to .NET app {uuid}", uuid);
//         let result = uuid.toString();
//         client.write(result); 
//     });

//     client.on('error', (err) => {
//         console.error('Error: ' + err.message);
//     });

//     client.on('close', () => {
//         console.log('Connection closed');
//     });
// });




app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

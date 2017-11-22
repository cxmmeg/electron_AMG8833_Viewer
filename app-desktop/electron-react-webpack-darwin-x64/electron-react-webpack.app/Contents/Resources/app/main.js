// Basic init
const electron = require('electron');
const {app, BrowserWindow} = electron;

// Let electron reloads by itself when webpack watches changes in ./app/
//require('electron-reload')(__dirname)

// To avoid being garbage collected
let mainWindow;

//quit on macOS
app.on('window-all-closed', () => {
    //if (process.platform != 'darwin') {
      app.quit();
    //}
  });

app.on('ready', () => {

    let mainWindow = new BrowserWindow({width: 800, height: 600});

    mainWindow.loadURL(`file://${__dirname}/public/index.html`);

})

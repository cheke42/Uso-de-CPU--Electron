
const { app, BrowserWindow,ipcMain } = require('electron')
const path = require('node:path')

// createWindow() que carga index.html en una nueva instancia BrowserWindow
const createWindow = () => {
    const win = new BrowserWindow({
      width: 210,
      height: 500,
      maxHeight: 500,
      minHeight: 500,
      minWidth: 210,
      maxWidth: 210,
      frame: false, // Remove hidde default frame
      icon: __dirname + '/assets/icons/win/ico.ico',
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: true,
        preload: path.join(__dirname, 'preload.js')
      },
      transparent: true,
      alwaysOnTop: true
    })
    ipcMain.on("close-app",() => app.quit());
    win.loadFile('index.html')

    // Open the DevTools.
    //win.webContents.openDevTools(); 
  }

// Las ventanas del navegador solo se pueden crear después de que el evento del módulo app ready sea disparado
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
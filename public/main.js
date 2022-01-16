const { app, BrowserWindow } = require('electron')

function createWindow() {
    // Create the browser window
    const win = new BrowserWindow({
        width: 1920, 
        height: 1080, 
        webPreferences: { }
    })
    win.loadURL('http://localhost:3000')
}

app.on('ready', createWindow)

//Quit when all windows are closed
app.moveToApplicationsFolder('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
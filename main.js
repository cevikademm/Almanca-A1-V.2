const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow(){
  const win = new BrowserWindow({
    width: 460, height: 860,
    minWidth: 380, minHeight: 640,
    title: 'A1 Almanca',
    icon: path.join(__dirname, 'app/assets/icon.png'),
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true }
  });
  win.loadFile(path.join(__dirname, 'app/index.html'));
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });

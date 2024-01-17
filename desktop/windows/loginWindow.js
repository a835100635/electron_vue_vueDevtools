
import { BrowserWindow } from 'electron';
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'

export const LoginWindow = {
  win: null,
  createWindow(){
    LoginWindow.win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
        contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
        webSecurity: false
      }
    })
    if (process.env.WEBPACK_DEV_SERVER_URL) {
      LoginWindow.win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
      if (!process.env.IS_TEST) LoginWindow.win.webContents.openDevTools()
    } else {
      createProtocol('app')
      LoginWindow.win.loadURL('app://./index.html')
    }
  }
};
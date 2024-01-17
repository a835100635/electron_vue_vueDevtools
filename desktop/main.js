import { app } from 'electron';
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'

import { LoginWindow } from './windows/loginWindow';

import './setup';
import { installDevtools } from './setup';

let loginWindowInstance = null;

app.on('window-all-closed', (event) => {
  // 阻止默认行为，即防止应用程序退出
  event.preventDefault();
});

app.on('ready', async () => {

  installDevtools();

  // 注册协议
  createProtocol('app');

  loginWindowInstance = LoginWindow.createWindow();
})

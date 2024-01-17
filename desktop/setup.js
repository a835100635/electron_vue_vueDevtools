import {
  app,
  protocol
} from 'electron'
import installExtension, {
  VUEJS_DEVTOOLS
} from 'electron-devtools-installer';

// 解决跨域
app.commandLine.appendSwitch('disable-web-security');
// 创建桌面快捷方式
app.setAsDefaultProtocolClient('app');

const isDevelopment = process.env.NODE_ENV !== 'production'

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{
  scheme: 'app',
  privileges: {
    secure: true,
    standard: true
  }
}]);

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

export const installDevtools = () => {
  if (isDevelopment && !process.env.IS_TEST) {
    try {
      // Install Vue Devtools
      installExtension(VUEJS_DEVTOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }

}
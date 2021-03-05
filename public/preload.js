const { contextBridge, BrowserWindow, remote } = require('electron')

contextBridge.exposeInMainWorld('electron', {
	rpc: 'http://localhost:8421/_jsonRPC_',
	platform: process.platform,
	minimize() {
		const mainWindow = remote.BrowserWindow.getFocusedWindow()
		if (mainWindow) mainWindow.minimize()
	},
	maximize() {
		const mainWindow = remote.BrowserWindow.getFocusedWindow()
		if (mainWindow) mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize()
	},
	close() {
		const mainWindow = remote.BrowserWindow.getFocusedWindow()
		mainWindow.close()
	}
})
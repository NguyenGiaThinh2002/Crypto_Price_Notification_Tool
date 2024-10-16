// preload.js
window.addEventListener('DOMContentLoaded', () => {
    console.log('Preload script loaded');
  });
  const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  sendRequestID: () => ipcRenderer.send('request-id'),
  onResponseID: (callback) => ipcRenderer.on('response-id', (event, id) => callback(id)),

  sendUUID: (uuid) => ipcRenderer.send('send-uuid', uuid),
  openDirectory: () => ipcRenderer.invoke('dialog:openDirectory'),
    
});

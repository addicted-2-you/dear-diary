import { ipcRenderer } from 'electron';

export function sendSql(sql) {
  return new Promise((resolve) => {
    ipcRenderer.once('sql-response', (_, arg) => {
      resolve(arg);
    });

    ipcRenderer.send('sql-request', sql);
  });
}

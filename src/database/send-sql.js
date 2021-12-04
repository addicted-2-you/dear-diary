import { ipcRenderer } from 'electron';
import { v4 as uuidv4 } from 'uuid';

export const sendSql = (sql, id = uuidv4()) =>
  new Promise((resolve) => {
    ipcRenderer.once(`sql-response-${id}`, (_, arg) => {
      resolve(arg);
    });

    ipcRenderer.send('sql-request', { sql, id });
  });

import { ipcRenderer } from 'electron';

import { uuidv4 } from '../utils/core.utils';

export function sendSql(sql, code = uuidv4()) {
  return new Promise((resolve) => {
    ipcRenderer.once(`sql-response-${code}`, (_, arg) => {
      resolve(arg);
    });

    ipcRenderer.send('sql-request', { sql, code });
  });
}

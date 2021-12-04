import { ipcMain } from 'electron';
import sqlite3 from 'sqlite3';

export function startDbListener(dbFile = 'database/dear_diary.sqlite3') {
  const database = new sqlite3.Database(dbFile, (err) => {
    if (err) {
      console.error('Database opening error: ', err);
    }
  });

  ipcMain.on('sql-request', (event, { sql, id }) => {
    database.all(sql, (err, rows) => {
      event.reply(`sql-response-${id}`, (err && err.message) || rows);
    });
  });
}

import { ipcMain } from 'electron';
import sqlite3 from 'sqlite3';

const database = new sqlite3.Database('database/dear_diary.sqlt', (err) => {
  if (err) {
    console.error('Database opening error: ', err);
  }
});

ipcMain.on('sql-request', (event, sql) => {
  database.all(sql, (err, rows) => {
    event.reply('sql-response', (err && err.message) || rows);
  });
});

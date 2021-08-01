import { ipcMain } from 'electron';
import sqlite3 from 'sqlite3';

const database = new sqlite3.Database('database/dear_diary.sqlite3', (err) => {
  if (err) {
    console.error('Database opening error: ', err);
  }
});

ipcMain.on('sql-request', (event, { sql, code }) => {
  database.all(sql, (err, rows) => {
    event.reply(`sql-response-${code}`, (err && err.message) || rows);
  });
});

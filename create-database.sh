rm -rf ./database/dear_diary.sqlite3

sqlite3 ./database/dear_diary.sqlite3 < ./database/scripts/money.sql

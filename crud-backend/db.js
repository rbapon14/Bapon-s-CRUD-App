const sqlite3 = require('sqlite3').verbose();

// SQLite database connection
const db = new sqlite3.Database('./items.db', (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to SQLite database.');

// table create
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS items (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL
            )
        `;

        db.run(createTableQuery, (err) => {
            if (err) {
                console.error('Error creating table:', err.message);
            } else {
                console.log('Items table ready.');
            }
        });
    }
});

module.exports = db;

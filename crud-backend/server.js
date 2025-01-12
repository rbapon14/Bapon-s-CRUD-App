const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');


const app = express();
const PORT = 5000;

const cors = require('cors');
app.use(cors());
// app.use(cors({ origin: 'http://localhost:3000' }));


// middleware to parse JSON requests
app.use(bodyParser.json());

// routes
app.post('/api/items', (req, res) => {
    const { name } = req.body;

    if (!name || name.trim() === '') {
        return res.status(400).json({ error: 'Name is required.' });
    }

    const query = 'INSERT INTO items (name) VALUES (?)';
    db.run(query, [name], function (err) {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ error: 'Failed to add item.' });
        }
        res.status(201).json({ id: this.lastID, name });
    });
});

app.get('/api/items', (req, res) => {
    const query = 'SELECT * FROM items';
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ error: 'Failed to retrieve items.' });
        }
        res.status(200).json(rows);
    });
});

app.put('/api/items/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    if (!name || name.trim() === '') {
        return res.status(400).json({ error: 'Name is required.' });
    }

    const query = 'UPDATE items SET name = ? WHERE id = ?';
    db.run(query, [name, id], function (err) {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ error: 'Failed to update item.' });
        }

        if (this.changes === 0) {
            return res.status(404).json({ error: 'Item not found.' });
        }

        res.status(200).json({ id, name });
    });
});

app.delete('/api/items/:id', (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM items WHERE id = ?';
    db.run(query, [id], function (err) {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ error: 'Failed to delete item.' });
        }

        if (this.changes === 0) {
            return res.status(404).json({ error: 'Item not found.' });
        }

        res.status(200).json({ message: 'Item deleted successfully.' });
    });
});

// server start
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});






//<<old test code>>

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());

// const itemRoutes = require('./routes/items');
// app.use('/api/items', itemRoutes);

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

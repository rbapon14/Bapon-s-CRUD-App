
const db = require('./db');


exports.getItems = (req, res) => {
    db.all('SELECT * FROM items', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(rows);
        }
    });
};

exports.addItem = (req, res) => {
    const { name } = req.body;
    db.run('INSERT INTO items (name) VALUES (?)', [name], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ id: this.lastID, name });
        }
    });
};

exports.updateItem = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    db.run('UPDATE items SET name = ? WHERE id = ?', [name, id], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (this.changes === 0) {
            res.status(404).json({ message: 'Item not found' });
        } else {
            res.status(200).json({ id, name });
        }
    });
};

exports.deleteItem = (req, res) => {
    const { id } = req.params;
    db.run('DELETE FROM items WHERE id = ?', [id], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (this.changes === 0) {
            res.status(404).json({ message: 'Item not found' });
        } else {
            res.status(200).json({ message: 'Item deleted' });
        }
    });
};





//test without database

// let items = [];

// exports.getItems = (req, res) => {
//     res.status(200).json(items);
// };

// exports.addItem = (req, res) => {
//     const newItem = { id: Date.now(), ...req.body };
//     items.push(newItem);
//     res.status(201).json(newItem);
// };

// exports.updateItem = (req, res) => {
//     const { id } = req.params;
//     const index = items.findIndex(item => item.id == id);
//     if (index !== -1) {
//         items[index] = { ...items[index], ...req.body };
//         res.status(200).json(items[index]);
//     } else {
//         res.status(404).json({ message: 'Item not found' });
//     }
// };

// exports.deleteItem = (req, res) => {
//     const { id } = req.params;
//     items = items.filter(item => item.id != id);
//     res.status(200).json({ message: 'Item deleted' });
// };

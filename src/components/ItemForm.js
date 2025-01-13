import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css';



const ItemForm = ({ editingItem, setEditingItem }) => {
    const [name, setName] = useState(editingItem ? editingItem.name : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = { name };
        if (editingItem) {
            axios.put(`http://localhost:5000/api/items/${editingItem.id}`, item)
                .then(() => setEditingItem(null));
        } else {
            axios.post('http://localhost:5000/api/items', item)
                .then(() => setName(''));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter item name"
            />
            <button type="submit" className={editingItem ? "update" : "add"}>{editingItem ? 'Update' : 'Add'}</button>
        </form>
    );
};

export default ItemForm;

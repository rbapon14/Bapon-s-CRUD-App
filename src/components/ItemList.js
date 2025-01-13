import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles.css';

const ItemList = ({ setEditingItem }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/items')
            .then(response => setItems(response.data))
            .catch(error => console.error(error));
    }, []);

    const deleteItem = (id) => {
        axios.delete(`http://localhost:5000/api/items/${id}`)
            .then(() => setItems(items.filter(item => item.id !== id)));
    };

    return (
        <div>
            <h2>Item List</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={item.id} style={{ borderBottom: '1px solid #ddd' }}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>
                                <button
                                    onClick={() => setEditingItem(item)}
                                    style={{ marginRight: '10px', backgroundColor: 'orange', color: 'white', padding: '5px 10px' }}
                                >
                                    Edit
                                </button>
                                
                                <button
                                    onClick={() => deleteItem(item.id)}
                                    style={{ padding: '5px 10px', backgroundColor: 'red', color: 'white' }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ItemList;

import React, { useState } from 'react';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import './styles.css';


const App = () => {
    const [editingItem, setEditingItem] = useState(null);

    return (
        <div className="app-container">
          <br></br>
            <h1>Bapon's CRUD App</h1>
            <ItemForm editingItem={editingItem} setEditingItem={setEditingItem} />
            <ItemList setEditingItem={setEditingItem} />
        </div>
    );
};

export default App;

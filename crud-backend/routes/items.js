const express = require('express');
const { body, validationResult } = require('express-validator');
const { getItems, addItem, updateItem, deleteItem } = require('../controllers/itemController');

const router = express.Router();

// fetch all items
router.get('/', getItems);

// add an item with validation
router.post(
    '/',
    body('name').not().isEmpty().withMessage('Name is required'),
    (req, res) => {
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        addItem(req, res);
    }
);

// update an item with validation
router.put(
    '/:id',
    body('name').not().isEmpty().withMessage('Name is required'),
    (req, res) => {
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    
        updateItem(req, res);
    }
);

// remove an item
router.delete('/:id', deleteItem);

module.exports = router;

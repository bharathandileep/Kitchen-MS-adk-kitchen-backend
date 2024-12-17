const express = require('express');
const router = express.Router();
const inventoryController = require('../controller/inventoryController');

// Get all inventory details
router.get('/', inventoryController.getAllInventories);

// Get a specific inventory detail by ID
router.get('/:id', inventoryController.getInventoryById);

// Add a new inventory detail
router.post('/', inventoryController.addInventory);

// Update a specific inventory detail by ID
router.put('/:id', inventoryController.updateInventoryById);

// Delete a specific inventory detail by ID
router.delete('/:id', inventoryController.deleteInventoryById);

module.exports = router;

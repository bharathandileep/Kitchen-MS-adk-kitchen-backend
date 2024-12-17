// routes/kitchenRoles.js
const express = require('express');
const router = express.Router();
const kitchenRoleController = require('../controller/kitchenRoleController');

// Create a new kitchen role
router.post('/', kitchenRoleController.createKitchenRole);

// Get all kitchen roles
router.get('/', kitchenRoleController.getAllKitchenRoles);

// Get a specific kitchen role by ID
router.get('/:id', kitchenRoleController.getKitchenRoleById);

// Update a specific kitchen role by ID
router.put('/:id', kitchenRoleController.updateKitchenRoleById);

// Delete a specific kitchen role by ID
router.delete('/:id', kitchenRoleController.deleteKitchenRoleById);

module.exports = router;

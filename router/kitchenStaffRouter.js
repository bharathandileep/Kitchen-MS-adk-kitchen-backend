const express = require('express');
const router = express.Router();
const kitchenStaffController = require('../controller/kitchenStaffController');

// Create a new kitchen staff
router.post('/', kitchenStaffController.createKitchenStaff);

// Get all kitchen staffs
router.get('/', kitchenStaffController.getAllKitchenStaffs);

// Get a kitchen staff by ID
router.get('/:id', kitchenStaffController.getKitchenStaffById);

// Update a kitchen staff by ID
router.put('/:id', kitchenStaffController.updateKitchenStaffById);

// Delete a kitchen staff by ID
router.delete('/:id', kitchenStaffController.deleteKitchenStaffById);

module.exports = router;

// routes/foodMenuTypes.js
const express = require('express');
const router = express.Router();
const foodMenuTypeController = require('../controller/foodMenuTypeController');

// Create a new food menu type
router.post('/', foodMenuTypeController.createFoodMenuType);

// Get all food menu types
router.get('/', foodMenuTypeController.getAllFoodMenuTypes);

// Get a specific food menu type by ID
router.get('/:id', foodMenuTypeController.getFoodMenuTypeById);

// Update a specific food menu type by ID
router.put('/:id', foodMenuTypeController.updateFoodMenuTypeById);

// Delete a specific food menu type by ID
router.delete('/:id', foodMenuTypeController.deleteFoodMenuTypeById);

module.exports = router;

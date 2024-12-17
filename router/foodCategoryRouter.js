// routes/foodCategories.js
const express = require('express');
const router = express.Router();
const foodCategoryController = require('../controller/foodCategoryController');

// Create a new food category
router.post('/', foodCategoryController.createFoodCategory);

// Get all food categories
router.get('/', foodCategoryController.getAllFoodCategories);

// Get a specific food category by ID
router.get('/:id', foodCategoryController.getFoodCategoryById);

// Update a specific food category by ID
router.put('/:id', foodCategoryController.updateFoodCategoryById);

// Delete a specific food category by ID
router.delete('/:id', foodCategoryController.deleteFoodCategoryById);

module.exports = router;

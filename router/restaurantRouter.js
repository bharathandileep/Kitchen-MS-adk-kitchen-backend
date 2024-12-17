const express = require('express');
const router = express.Router();
const restaurantsController = require('../controller/restaurantsController');

// Get all restaurant details
router.get('/', restaurantsController.getAllRestaurants);

// Get a specific restaurant detail by ID
router.get('/:id', restaurantsController.getRestaurantById);

// Add a new restaurant detail
router.post('/', restaurantsController.addRestaurant);

// Update a specific restaurant detail by ID
router.put('/:id', restaurantsController.updateRestaurantById);

// Delete a specific restaurant detail by ID
router.delete('/:id', restaurantsController.deleteRestaurantById);

module.exports = router;

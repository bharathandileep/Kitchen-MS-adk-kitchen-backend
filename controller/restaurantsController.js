const RestaurantsModel = require('../Models/RestaurantsModel');
const MenuModel = require('../Models/MenuModel');

// Verify existence of menu
const verifyMenuId = async (menu_id) => {
    const menu = await MenuModel.findOne({ menu_id });
    if (!menu) {
        throw new Error('Menu not found');
    }
};

// Check if restaurant_id is unique
const isRestaurantIdUnique = async (restaurant_id) => {
    const restaurant = await RestaurantsModel.findOne({ restaurant_id });
    if (restaurant) {
        throw new Error('restaurant_id already exists');
    }
};

// Get all restaurant details
exports.getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await RestaurantsModel.find();
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a specific restaurant detail by ID
exports.getRestaurantById = async (req, res) => {
    try {
        const restaurant = await RestaurantsModel.findById(req.params.id);
        if (!restaurant) return res.status(404).json({ message: 'Restaurant not found' });
        res.json(restaurant);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a new restaurant detail
exports.addRestaurant = async (req, res) => {
    const { restaurant_id, menu_id } = req.body;

    try {
        await verifyMenuId(menu_id);
        await isRestaurantIdUnique(restaurant_id);

        const newRestaurant = new RestaurantsModel(req.body);
        const savedRestaurant = await newRestaurant.save();
        res.status(201).json(savedRestaurant);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a specific restaurant detail by ID
exports.updateRestaurantById = async (req, res) => {
    const { restaurant_id, menu_id } = req.body;

    try {
        if (menu_id) {
            await verifyMenuId(menu_id);
        }

        const existingRestaurant = await RestaurantsModel.findById(req.params.id);
        if (!existingRestaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }

        if (restaurant_id && restaurant_id !== existingRestaurant.restaurant_id) {
            await isRestaurantIdUnique(restaurant_id);
        }

        Object.assign(existingRestaurant, req.body);
        const updatedRestaurant = await existingRestaurant.save();
        res.json(updatedRestaurant);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a specific restaurant detail by ID
exports.deleteRestaurantById = async (req, res) => {
    try {
        const restaurant = await RestaurantsModel.findByIdAndDelete(req.params.id);
        if (!restaurant) return res.status(404).json({ message: 'Restaurant not found' });
        res.json({ message: 'Restaurant deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

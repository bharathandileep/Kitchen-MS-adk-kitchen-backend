// controllers/FoodMenuTypeController.js
const FoodMenuType = require('../Models/FoodMenuTypeModel');

// Create a new food menu type
exports.createFoodMenuType = async (req, res) => {
    try {
        const newFoodMenuType = new FoodMenuType(req.body);
        const savedFoodMenuType = await newFoodMenuType.save();
        res.status(201).json(savedFoodMenuType);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all food menu types
exports.getAllFoodMenuTypes = async (req, res) => {
    try {
        const foodMenuTypes = await FoodMenuType.find();
        res.json(foodMenuTypes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a food menu type by ID
exports.getFoodMenuTypeById = async (req, res) => {
    try {
        const foodMenuType = await FoodMenuType.findById(req.params.id);
        if (!foodMenuType) return res.status(404).json({ message: 'Food menu type not found' });
        res.json(foodMenuType);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a food menu type by ID
exports.updateFoodMenuTypeById = async (req, res) => {
    try {
        const updatedFoodMenuType = await FoodMenuType.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedFoodMenuType) return res.status(404).json({ message: 'Food menu type not found' });
        res.json(updatedFoodMenuType);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a food menu type by ID
exports.deleteFoodMenuTypeById = async (req, res) => {
    try {
        const deletedFoodMenuType = await FoodMenuType.findByIdAndDelete(req.params.id);
        if (!deletedFoodMenuType) return res.status(404).json({ message: 'Food menu type not found' });
        res.json({ message: 'Food menu type deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

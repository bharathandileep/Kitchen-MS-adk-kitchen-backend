// controllers/FoodCategoryController.js
const FoodCategory = require('../Models/FoodCategoryModel');

// Create a new food category
exports.createFoodCategory = async (req, res) => {
    try {
        const newFoodCategory = new FoodCategory(req.body);
        const savedFoodCategory = await newFoodCategory.save();
        res.status(201).json(savedFoodCategory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all food categories
exports.getAllFoodCategories = async (req, res) => {
    try {
        const foodCategories = await FoodCategory.find();
        res.json(foodCategories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a food category by ID
exports.getFoodCategoryById = async (req, res) => {
    try {
        const foodCategory = await FoodCategory.findById(req.params.id);
        if (!foodCategory) return res.status(404).json({ message: 'Food category not found' });
        res.json(foodCategory);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a food category by ID
exports.updateFoodCategoryById = async (req, res) => {
    try {
        const updatedFoodCategory = await FoodCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedFoodCategory) return res.status(404).json({ message: 'Food category not found' });
        res.json(updatedFoodCategory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a food category by ID
exports.deleteFoodCategoryById = async (req, res) => {
    try {
        const deletedFoodCategory = await FoodCategory.findByIdAndDelete(req.params.id);
        if (!deletedFoodCategory) return res.status(404).json({ message: 'Food category not found' });
        res.json({ message: 'Food category deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

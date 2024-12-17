const InventoryModel = require('../models/InventoryModel');
const RestaurantModel = require('../models/RestaurantsModel');


// Check if inventory_id is unique
const isInventoryIdUnique = async (inventory_id) => {
    const inventory = await InventoryModel.findOne({ inventory_id });
    if (inventory) {
        throw new Error('inventory_id already exists');
    }
};

// Get all inventory details
exports.getAllInventories = async (req, res) => {
    try {
        const inventories = await InventoryModel.find();
        res.json(inventories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a specific inventory detail by ID
exports.getInventoryById = async (req, res) => {
    try {
        const inventory = await InventoryModel.findById(req.params.id);
        if (!inventory) return res.status(404).json({ message: 'Inventory not found' });
        res.json(inventory);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a new inventory detail
exports.addInventory = async (req, res) => {
    const { inventory_id, restaurant_id } = req.body;

    try {
        await isInventoryIdUnique(inventory_id);

        const newInventory = new InventoryModel(req.body);
        const savedInventory = await newInventory.save();
        res.status(201).json(savedInventory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a specific inventory detail by ID
exports.updateInventoryById = async (req, res) => {
    const { inventory_id, restaurant_id } = req.body;

    try {
       

        const existingInventory = await InventoryModel.findById(req.params.id);
        if (!existingInventory) {
            return res.status(404).json({ message: 'Inventory not found' });
        }

        if (inventory_id && inventory_id !== existingInventory.inventory_id) {
            await isInventoryIdUnique(inventory_id);
        }

        Object.assign(existingInventory, req.body);
        const updatedInventory = await existingInventory.save();
        res.json(updatedInventory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a specific inventory detail by ID
exports.deleteInventoryById = async (req, res) => {
    try {
        const inventory = await InventoryModel.findByIdAndDelete(req.params.id);
        if (!inventory) return res.status(404).json({ message: 'Inventory not found' });
        res.json({ message: 'Inventory deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

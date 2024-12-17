const InventoryOrderItemsModel = require('../Models/InventoryOrderItemsModel');
const InventoryOrdersModel = require('../Models/InventoryOrdersModel');


// Get all inventory order items
exports.getAllInventoryOrderItems = async (req, res) => {
    try {
        const items = await InventoryOrderItemsModel.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a specific inventory order item by ID
exports.getInventoryOrderItemById = async (req, res) => {
    try {
        const item = await InventoryOrderItemsModel.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Inventory order item not found' });
        res.json(item);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a new inventory order item
exports.addInventoryOrderItem = async (req, res) => {
    try {
        const { inventory_order_id, inventory_order_item_id } = req.body;

        // Check if inventory_order_item_id already exists
        const existingItem = await InventoryOrderItemsModel.findOne({ inventory_order_item_id });
        if (existingItem) {
            return res.status(400).json({ message: 'inventory_order_item_id already exists' });
        }

        const newItem = new InventoryOrderItemsModel(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a specific inventory order item by ID
exports.updateInventoryOrderItem = async (req, res) => {
    try {
        const { inventory_order_id } = req.body;

        const updatedItem = await InventoryOrderItemsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: 'Inventory order item not found' });
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a specific inventory order item by ID
exports.deleteInventoryOrderItem = async (req, res) => {
    try {
        const item = await InventoryOrderItemsModel.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).json({ message: 'Inventory order item not found' });
        res.json({ message: 'Inventory order item deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

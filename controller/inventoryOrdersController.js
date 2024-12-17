const InventoryOrdersModel = require('../Models/InventoryOrdersModel');
const RestaurantModel = require('../models/RestaurantsModel');
const SupplierModel = require('../Models/SuppliersModel');


// Verify unique inventory_order_id
const verifyUniqueInventoryOrderId = async (inventory_order_id) => {
    const existingOrder = await InventoryOrdersModel.findOne({ inventory_order_id });
    if (existingOrder) {
        throw new Error('inventory_order_id already exists');
    }
};

// Get all inventory orders
exports.getAllInventoryOrders = async (req, res) => {
    try {
        const inventoryOrders = await InventoryOrdersModel.find();
        res.json(inventoryOrders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a specific inventory order by ID
exports.getInventoryOrderById = async (req, res) => {
    try {
        const inventoryOrder = await InventoryOrdersModel.findById(req.params.id);
        if (!inventoryOrder) return res.status(404).json({ message: 'Inventory order not found' });
        res.json(inventoryOrder);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a new inventory order
exports.addInventoryOrder = async (req, res) => {
    try {
        const { inventory_order_id, restaurant_id, supplier_id } = req.body;

        await verifyUniqueInventoryOrderId(inventory_order_id);

        const newInventoryOrder = new InventoryOrdersModel(req.body);
        const savedInventoryOrder = await newInventoryOrder.save();
        res.status(201).json(savedInventoryOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a specific inventory order by ID
exports.updateInventoryOrder = async (req, res) => {
    try {
        const { inventory_order_id, restaurant_id, supplier_id } = req.body;

       

        if (inventory_order_id) {
            const existingOrder = await InventoryOrdersModel.findOne({ inventory_order_id });
            if (existingOrder && existingOrder._id.toString() !== req.params.id) {
                throw new Error('inventory_order_id already exists');
            }
        }

        const updatedInventoryOrder = await InventoryOrdersModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedInventoryOrder) return res.status(404).json({ message: 'Inventory order not found' });
        res.json(updatedInventoryOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a specific inventory order by ID
exports.deleteInventoryOrder = async (req, res) => {
    try {
        const inventoryOrder = await InventoryOrdersModel.findByIdAndDelete(req.params.id);
        if (!inventoryOrder) return res.status(404).json({ message: 'Inventory order not found' });
        res.json({ message: 'Inventory order deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

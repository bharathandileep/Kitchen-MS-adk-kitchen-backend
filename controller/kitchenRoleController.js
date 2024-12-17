// controllers/KitchenRoleController.js
const KitchenRole = require('../Models/KitchenRoleModel');

// Function to check for duplicate role_id
const checkDuplicateRoleId = async (role_id) => {
    const existingRole = await KitchenRole.findOne({ role_id });
    return existingRole ? true : false;
};

// Create a new kitchen role
exports.createKitchenRole = async (req, res) => {
    try {
        const { role_id } = req.body;
        if (await checkDuplicateRoleId(role_id)) {
            return res.status(400).json({ message: 'role_id must be unique' });
        }

        const newKitchenRole = new KitchenRole(req.body);
        const savedKitchenRole = await newKitchenRole.save();
        res.status(201).json(savedKitchenRole);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all kitchen roles
exports.getAllKitchenRoles = async (req, res) => {
    try {
        const kitchenRoles = await KitchenRole.find();
        res.json(kitchenRoles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a kitchen role by ID
exports.getKitchenRoleById = async (req, res) => {
    try {
        const kitchenRole = await KitchenRole.findOne(req.params.id);
        if (!kitchenRole) return res.status(404).json({ message: 'Kitchen role not found' });
        res.json(kitchenRole);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a kitchen role by ID
exports.updateKitchenRoleById = async (req, res) => {
    try {
        const updatedKitchenRole = await KitchenRole.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedKitchenRole) return res.status(404).json({ message: 'Kitchen role not found' });
        res.json(updatedKitchenRole);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a kitchen role by ID
exports.deleteKitchenRoleById = async (req, res) => {
    try {
        const deletedKitchenRole = await KitchenRole.findByIdAndDelete(req.params.id);
        if (!deletedKitchenRole) return res.status(404).json({ message: 'Kitchen role not found' });
        res.json({ message: 'Kitchen role deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

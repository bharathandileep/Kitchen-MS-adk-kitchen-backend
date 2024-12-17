const SuppliersModel = require('../Models/SuppliersModel');

// Verify unique supplier_id
const verifyUniqueSupplierId = async (supplier_id) => {
    const existingSupplier = await SuppliersModel.findOne({ supplier_id });
    if (existingSupplier) {
        throw new Error('supplier_id already exists');
    }
};

// Get all suppliers
exports.getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await SuppliersModel.find();
        res.json(suppliers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a specific supplier by ID
exports.getSupplierById = async (req, res) => {
    try {
        const supplier = await SuppliersModel.findByOne(req.params.id);
        if (!supplier) return res.status(404).json({ message: 'Supplier not found' });
        res.json(supplier);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a new supplier
exports.addSupplier = async (req, res) => {
    try {
        const { supplier_id } = req.body;
        await verifyUniqueSupplierId(supplier_id);

        const newSupplier = new SuppliersModel(req.body);
        const savedSupplier = await newSupplier.save();
        res.status(201).json(savedSupplier);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a specific supplier by ID
exports.updateSupplier = async (req, res) => {
    try {
        const { supplier_id } = req.body;

        const existingSupplier = await SuppliersModel.findOne({ supplier_id });
        if (existingSupplier && existingSupplier._id.toString() !== req.params.id) {
            throw new Error('supplier_id already exists');
        }

        const updatedSupplier = await SuppliersModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSupplier) return res.status(404).json({ message: 'Supplier not found' });
        res.json(updatedSupplier);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a specific supplier by ID
exports.deleteSupplier = async (req, res) => {
    try {
        const supplier = await SuppliersModel.findByIdAndDelete(req.params.id);
        if (!supplier) return res.status(404).json({ message: 'Supplier not found' });
        res.json({ message: 'Supplier deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

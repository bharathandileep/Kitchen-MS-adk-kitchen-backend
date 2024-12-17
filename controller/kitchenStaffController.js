const KitchenStaffs = require('../Models/KitchenStaffModel');

// Function to check for duplicate staff_id
const checkDuplicateStaffId = async (staff_id) => {
    const existingStaff = await KitchenStaffs.findOne({ staff_id });
    return existingStaff ? true : false;
};

// Create a new kitchen staff
exports.createKitchenStaff = async (req, res) => {
    try {
        const { staff_id } = req.body;

        // Check for duplicate staff_id
        // if (await checkDuplicateStaffId(staff_id)) {
        //     return res.status(400).json({ message: 'staff_id must be unique' });
        // }

        const newKitchenStaff = new KitchenStaffs(req.body);
        const savedKitchenStaff = await newKitchenStaff.save();

        res.status(201).json(savedKitchenStaff);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all kitchen staffs with pagination
exports.getAllKitchenStaffs = async (req, res) => {
    try {
        const page = parseInt(req.query.page, 10) || 1; // Default to page 1 if not provided
        const limit = parseInt(req.query.limit, 10) || 10; // Default to 10 items per page if not provided
        const skip = (page - 1) * limit;

        const totalItems = await KitchenStaffs.countDocuments();
        const totalPages = Math.ceil(totalItems / limit);

        const kitchenStaffs = await KitchenStaffs.find().skip(skip).limit(limit);

        res.status(200).json({
            message: 'Kitchen Staffs retrieved successfully',
            data: kitchenStaffs,
            pagination: {
                totalItems,
                totalPages,
                currentPage: page,
                itemsPerPage: limit,
            },
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a kitchen staff by ID
exports.getKitchenStaffById = async (req, res) => {
    try {
        const kitchenStaff = await KitchenStaffs.findById(req.params.id);
        if (!kitchenStaff) return res.status(404).json({ message: 'Kitchen staff not found' });
        res.status(200).json(kitchenStaff);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a kitchen staff by ID
exports.updateKitchenStaffById = async (req, res) => {
    try {
        const updatedKitchenStaff = await KitchenStaffs.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedKitchenStaff) return res.status(404).json({ message: 'Kitchen staff not found' });
        res.status(200).json(updatedKitchenStaff);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a kitchen staff by ID
exports.deleteKitchenStaffById = async (req, res) => {
    try {
        const deletedKitchenStaff = await KitchenStaffs.findByIdAndDelete(req.params.id);
        if (!deletedKitchenStaff) return res.status(404).json({ message: 'Kitchen staff not found' });
        res.status(200).json({ message: 'Kitchen staff deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

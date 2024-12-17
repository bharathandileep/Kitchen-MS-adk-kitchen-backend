const MenuModel = require('../Models/MenuModel');


// Function to check if the menu_id is unique
const isMenuIdUnique = async (menu_id) => {
    const existingMenu = await MenuModel.findOne({ Menu_id: menu_id });
    return existingMenu ? false : true;
};

// Get all menu items
exports.getAllMenus = async (req, res) => {
    try {
        const menus = await MenuModel.find();
        res.json(menus);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a specific menu item by ID
exports.getMenuById = async (req, res) => {
    try {
        const menu = await MenuModel.findOne({ Menu_id: req.params.id });
        if (!menu) return res.status(404).json({ message: 'Menu not found' });
        res.json(menu);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a new menu item
exports.addMenu = async (req, res) => {
    try {
        const { Menu_id, restaurant_id } = req.body;


        // Check if the menu_id is unique
        const isUnique = await isMenuIdUnique(Menu_id);
        if (!isUnique) {
            return res.status(400).json({ message: 'Menu_id must be unique' });
        }

        const newMenu = new MenuModel(req.body);
        const savedMenu = await newMenu.save();
        res.status(201).json(savedMenu);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a specific menu item by ID
exports.updateMenu = async (req, res) => {
    try {
        const { restaurant_id } = req.body;

        const updatedMenu = await MenuModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMenu) return res.status(404).json({ message: 'Menu not found' });
        res.json(updatedMenu);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a specific menu item by ID
exports.deleteMenu = async (req, res) => {
    try {
        const menu = await MenuModel.findByIdAndDelete(req.params.id);
        if (!menu) return res.status(404).json({ message: 'Menu not found' });
        res.json({ message: 'Menu deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

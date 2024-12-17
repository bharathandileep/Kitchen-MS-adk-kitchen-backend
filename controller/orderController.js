const OrdersModel = require('../Models/OrdersModel');


// Get all orders
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await OrdersModel.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a specific order by ID
exports.getOrderById = async (req, res) => {
    try {
        const order = await OrdersModel.findOne(req.params.id);
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a new order
exports.addOrder = async (req, res) => {
    try {
        const { order_id, restaurant_id } = req.body;
        await verifyRestaurantId(restaurant_id);

        // Check if order_id already exists
        const existingOrder = await OrdersModel.findOne({ order_id });
        if (existingOrder) {
            return res.status(400).json({ message: 'order_id already exists' });
        }

        const newOrder = new OrdersModel(req.body);
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a specific order by ID
exports.updateOrder = async (req, res) => {
    try {
        const { restaurant_id } = req.body;
        await verifyRestaurantId(restaurant_id);

        const updatedOrder = await OrdersModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrder) return res.status(404).json({ message: 'Order not found' });
        res.json(updatedOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a specific order by ID
exports.deleteOrder = async (req, res) => {
    try {
        const order = await OrdersModel.findByIdAndDelete(req.params.id);
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.json({ message: 'Order deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

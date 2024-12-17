const mongoose = require('mongoose');
const OrderItemsSchema = require('../schemas/OrderItemsSchema');
const OrderItemsModel = mongoose.model('OrderItems',OrderItemsSchema);  // Use the imported schema
module.exports =OrderItemsModel;
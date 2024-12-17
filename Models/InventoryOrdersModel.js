const mongoose = require('mongoose');
const InventoryOrdersSchema = require('../schemas/InventoryOrdersSchema');
const InventoryOrdersModel = mongoose.model('InventoryOrders',InventoryOrdersSchema);  // Use the imported schema
module.exports =InventoryOrdersModel;
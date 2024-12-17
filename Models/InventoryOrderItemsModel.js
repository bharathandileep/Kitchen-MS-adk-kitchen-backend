const mongoose = require('mongoose');
const InventoryOrderItemsSchema = require('../schemas/InventoryOrderItemsSchema');
const InventoryOrderItemsModel = mongoose.model('InventoryOrderItems',InventoryOrderItemsSchema);  // Use the imported schema
module.exports =InventoryOrderItemsModel;
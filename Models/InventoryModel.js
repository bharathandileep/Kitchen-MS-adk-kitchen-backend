const mongoose = require('mongoose');
const InventorySchema = require('../schemas/InventorySchema');
const InventoryModel = mongoose.model('Inventory',InventorySchema);  // Use the imported schema
module.exports =InventoryModel;
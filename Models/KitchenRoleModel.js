const mongoose = require('mongoose');
const KitchenRoleSchema = require('../schemas/KitchenRoleSchema');
const KitchenRoleModel = mongoose.model('KitchenRole',KitchenRoleSchema);  // Use the imported schema
module.exports =KitchenRoleModel;
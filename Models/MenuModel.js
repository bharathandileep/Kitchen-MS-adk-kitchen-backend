const mongoose = require('mongoose');
const MenuSchema = require('../schemas/MenuSchema');
const MenuModel = mongoose.model('menus',MenuSchema);  // Use the imported schema
module.exports =MenuModel;
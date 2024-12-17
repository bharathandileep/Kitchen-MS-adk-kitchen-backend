const mongoose = require('mongoose');
const SuppliersSchema = require('../schemas/SuppliersSchema');
const SuppliersModel = mongoose.model('Suppliers',SuppliersSchema);  // Use the imported schema
module.exports =SuppliersModel;
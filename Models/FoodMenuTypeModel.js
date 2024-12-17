const mongoose = require('mongoose');
const FoodMenuTypeSchema = require('../schemas/FoodMenuTypeSchema');
const FoodMenuTypeModel = mongoose.model('FoodMenuType',FoodMenuTypeSchema);  // Use the imported schema
module.exports =FoodMenuTypeModel;
const mongoose = require('mongoose');
const FoodCategorySchema = require('../schemas/FoodCategorySchema');
const FoodCtegoryModel = mongoose.model('FoodCategory',FoodCategorySchema);  // Use the imported schema
module.exports =FoodCtegoryModel;
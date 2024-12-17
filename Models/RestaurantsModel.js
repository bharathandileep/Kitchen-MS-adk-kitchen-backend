const mongoose = require('mongoose');
const RestaurantsSchema = require('../schemas/RestaurantsSchema');
const RestaurantsModel = mongoose.model('Restaurants',RestaurantsSchema);  // Use the imported schema
module.exports =RestaurantsModel;
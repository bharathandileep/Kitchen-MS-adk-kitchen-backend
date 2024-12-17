
const mongoose = require('mongoose');
const orgfoodproductsschema = require('../schemas/orgfoodproductsschema');
const OrgFoodproductsModel = mongoose.model('orgfoodproducts',orgfoodproductsschema);  // Use the imported schema
module.exports = OrgFoodproductsModel;

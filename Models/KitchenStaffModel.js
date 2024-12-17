const mongoose = require('mongoose');
const KitchenStaffsSchema = require('../schemas/KitchenStaffSchema');
const KitchenStaffsModel = mongoose.model('KitchenStaffs',KitchenStaffsSchema);  // Use the imported schema
module.exports =KitchenStaffsModel;



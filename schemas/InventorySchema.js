const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({

    inventory_id :{
        type : String,
       // required : true
    },

    restaurant_id :{
        type :  mongoose.Schema.Types.ObjectId,

        //required : true
    },
    item_name :{
        type : String,

       // required : true
    },
    qty : {
        type : Number,
       // required : true
    },
    unit : {
        type : String,
      //  required : true
    },
    threshold : {
        type : String,
      //  required : true
    },
   
    created_by : {
        type :  mongoose.Schema.Types.ObjectId,
       // required : true
    },
    created_at : {
        type :  Date,
      //  required : true
    },
    updated_by : {
        type :  mongoose.Schema.Types.ObjectId,
      //  required : true
    },
    updated_at : {
        type : Date,
       // required : true
    }
}
);

module.exports = InventorySchema;











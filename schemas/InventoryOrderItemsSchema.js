const mongoose = require('mongoose');

const InventoryOrderItemsSchema = new mongoose.Schema({

    inventory_order_item_id :{
        type : String,
       // required : true
    },

    inventory_order_id :{
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
    unit: {
        type : String,
      //  required : true
    },
    price: {
        type : Number,
      //  required : true
    },
    created_by : {
        type : Date,
       // required : true
    },
    created_at : {
        type :  mongoose.Schema.Types.ObjectId,
      //  required : true
    },
    updated_by : {
        type : Date,
      //  required : true
    },
    updated_at : {
        type :  mongoose.Schema.Types.ObjectId,
       // required : true
    }
}
);

module.exports = InventoryOrderItemsSchema;











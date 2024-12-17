const mongoose = require('mongoose');

const OrdersSchema = new mongoose.Schema({

    order_id :{
        type : String,
       // required : true
    },

    restaurant_id :{
        type : mongoose.Schema.Types.ObjectId,

        //required : true
    },
   
    order_date : {
        type : Date,
       // required : true
    },
    status : {
        type : String,
      //  required : true
    },
    total_amount : {
        type : Number,
      //  required : true
    },
    created_by : {
        type : mongoose.Schema.Types.ObjectId,
       // required : true
    },
    created_at : {
        type : Date,
      //  required : true
    },
    updated_by : {
        type : mongoose.Schema.Types.ObjectId,
      //  required : true
    },
    updated_at : {
        type : Date,
       // required : true
    }
}
);

module.exports = OrdersSchema;











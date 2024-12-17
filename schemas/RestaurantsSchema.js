const mongoose = require('mongoose');

const RestaurantsSchema = new mongoose.Schema({

    restaurant_id :{
        type : String,
       // required : true
    },

    name :{
        type : String,

        //required : true
    },
    address :{
        type : String,

       // required : true
    },
    phone_num : {
        type : Number,
       // required : true
    },
    email : {
        type : String,
      //  required : true
    },
    menu_id : {
        type : mongoose.Schema.Types.ObjectId,
      //  required : true
    },
    opening_hrs : {
        type : String,
       // required : true
    },
    
    closing_hrs : {
        type : String,
       // required : true
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

module.exports = RestaurantsSchema;











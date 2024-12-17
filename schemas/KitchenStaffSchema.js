const mongoose = require('mongoose');

const KitchenStaffsSchema = new mongoose.Schema({

    // staff_id :{
    //     type : String,
    //    // required : true
    // },

    // restaurant_id :{
    //     type :  mongoose.Schema.Types.ObjectId,

    //     //required : true
    // },
    name :{
        type : String,

       // required : true
    },
    role : {
        type : String,
       // required : true
    },
    email : {
        type : String,
      //  required : true
    },
    phone : {
        type : Number,
      //  required : true
    },
    shift_start : {
        type : Date,
      //  required : true
    },
    shift_end : {
        type : Date,
      //  required : true
    },
    created_by : {
        type :  mongoose.Schema.Types.ObjectId,
       // required : true
    },
    created_at : {
        type : Date,
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

module.exports = KitchenStaffsSchema;











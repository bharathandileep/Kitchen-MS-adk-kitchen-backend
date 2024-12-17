const mongoose = require('mongoose');

const SuppliersSchema = new mongoose.Schema({

    supplier_id :{
        type : String,
       // required : true
    },

    name :{
        type : String,

        //required : true
    },
    contact_person :{
        type : String,

       // required : true
    },
    phone : {
        type : Number,
       // required : true
    },
    email : {
        type : String,
      //  required : true
    },
    address : {
        type : String,
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

module.exports = SuppliersSchema;











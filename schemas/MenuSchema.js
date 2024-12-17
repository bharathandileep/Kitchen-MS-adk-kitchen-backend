const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({

    Menu_id :{
        type : String,
       // required : true
    },

    restaurant_id :{
        type : mongoose.Schema.Types.ObjectId,

        //required : true
    },
    name :{
        type : String,

       // required : true
    },
    description : {
        type : String,
       // required : true
    },
    available : {
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

module.exports = MenuSchema;











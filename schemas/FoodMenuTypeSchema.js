const mongoose = require('mongoose');

const FoodMenuTypeSchema = new mongoose.Schema({

    food_menu_type_id :{
        type : String,
       // required : true
    },
    menu_id :{
      type :  mongoose.Schema.Types.ObjectId,
     // required : true
  },
  breakfast :{
    type : String,
   // required : true
},
    lunch :{
        type : String,

        //required : true
    },
    tea :{
        type : String,

       // required : true
    },
    dinner :{
        type : String,
       // required : true
    },
    veg :{
        type : Boolean,
      //  required : true
    },
    nonveg :{
        type : Boolean,
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

module.exports = FoodMenuTypeSchema;











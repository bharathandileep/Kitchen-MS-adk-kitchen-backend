const mongoose = require('mongoose');

const FoodCategorySchema = new mongoose.Schema({

   food_category_id :{
        type : String,
       // required : true
    },
    item_id :{
      type :  mongoose.Schema.Types.ObjectId,
     // required : true
  },
  northindian :{
    type : String,
   // required : true
},

    chinese :{
        type : String,

        //required : true
    },
    arabic :{
        type : String,

       // required : true
    },
    asian :{
        type : String,
       // required : true
    },
    thai :{
        type : String,
      //  required : true
    },
     continental:{
        type : String,
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

module.exports = FoodCategorySchema;











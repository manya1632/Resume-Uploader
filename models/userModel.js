import mongoose from "mongoose";

const userForm = mongoose.Schema( { 
     fullName  : {type : String, required : true,  trim: true} ,
     email  : {type : String, required : true,  trim: true} ,
     state  : {type : String, required : true,  trim: true} ,
     gender  : {type : String, required : true,  trim: true} ,
     dob  : {type : String, required : true,  trim: true} ,
     pimg  : {type : String, required : true,  trim: true} ,
     rdoc  : {type : String, required : true,  trim: true} 

})

const UserModel =  mongoose.model("userForm",userForm);

export default UserModel;
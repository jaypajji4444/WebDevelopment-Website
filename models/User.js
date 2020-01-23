const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const UserSchema=new Schema({
    
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    msg:{type:String,default:null}
})

module.exports=mongoose.model("user",UserSchema);
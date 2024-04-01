const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
   name:{
    type:'String',
    required:true,
   }, 
   image:{
    type:'String',
    required:true,
   }, 
   balance:{
    type:'Number',
    required:true,
   },
   user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true,
   }, 
}, { timestamps: true });


// Export model
module.exports = mongoose.model("Account", AccountSchema);

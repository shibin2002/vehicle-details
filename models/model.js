const mongoose=require('mongoose');

const EnquirySchema=new mongoose.Schema({
    ProductName:{type:String,required:true},
    ManufactureID:{type:String,required:true},
    ProductID:{type:String,required:true},
    date:{type:Date,default:Date.now} 
});

module.exports=mongoose.model('model',EnquirySchema);
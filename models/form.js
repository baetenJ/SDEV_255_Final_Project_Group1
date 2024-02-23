 
//Requiring mongoose package 
var mongoose=require("mongoose"); 
  
// Schema 
var formSchema=new mongoose.Schema({ 
    courseName : String, 
    courseDescription    : String,
    courseSubject : String,
    courseCredit : Number
}); 
  
module.exports=mongoose.model("Form",formSchema);
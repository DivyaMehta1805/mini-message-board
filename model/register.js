const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema({
    
       
  name:
  {
      required:true,
      type:string
  }
  ,message:
  {
    required:true,
    type:string
  }
    

  


});
const Register= new mongoose.model("Register",studentSchema);
module.exports=Register;
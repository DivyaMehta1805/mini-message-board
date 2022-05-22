const mongoose= require("mongoose");


//connect express with mogodb and create database
mongoose.connect("mongodb://localhost:27017/messageboard",{
    useNewUrlParser:true,
    useUnifiedtopology:true,
   
    
}).then(()=>{
    console.log(`connection successfuk`);
}
).catch((err)=>{
    console.log(err);
});
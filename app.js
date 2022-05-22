const express = require("express");
const app= express();
const Register = require("./model/register");
const indexx = require("./routes/index");
require("./db/conn");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/",indexx);
app.set("view engine","hbs");
app.get("/",(req,res)=>{
    res.render("index");
});
app.listen(2000,()=>
{
    console.log(`successful`);
});
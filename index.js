const express=require("express");
const app= express();
const bodyParser=require('body-parser');
const mongoose=require("mongoose");
const User=require("./models/User");
const config=require("./config/key");

const db=async()=>{
    await mongoose.connect(config.key,{useNewUrlParser:true});
}
db().catch(err=>console.log(err));

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.post("/api",async(req,res,next)=>{
    console.log('post Request Received');
    const data=req.body;
    const newUser=new User(data);

    await newUser.save()
    .then(data=>{
        res.status(201).send({success:true,data:data})
    })
    .catch(err=>{
        res.status(500).send({success:false,Error:err})
    })
    
    
})

app.use("/Admin",(req,res)=>{
    
    res.sendfile("./public/Admin.html")
})


app.get("/getData",async(req,res)=>{
    const response=await User.find({})
    res.status(200).send({success:true,data:response})
    
})
app.listen(3009,()=>{
    console.log("Port listening successfully on port:3009")
})

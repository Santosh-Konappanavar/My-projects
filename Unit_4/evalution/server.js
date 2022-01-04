const express = require("express")
const mongoose = require("mongoose")

const connect=()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/Product")
}

const userschema=new mongoose.Schema({
    Product_name:{type:String,required:true},
    Colour:{type:String,required:true},
    Use_for:{type:String,required:false,default:"Men"},
    Price:{type:Number,required:true}
},{
    versionKey:false,
    timestamps:true

})

const User=mongoose.model("users",userschema);


const app=express();
app.use(express.json())

app.post("/users",async (req,res)=>{
    try{
        const user= await User.create(req.body);
        return res.status(201).send(user); 
    }catch(err){
        return res.status(500).send(err.message);
    }
   
})

app.get("/users" ,async (req,res)=>{
    try{
        const user= await User.find().lean().exec();
        return res.status(200).send(user); 
    }catch(err){
        return res.status({error:err.message})
    }
})

app.get("/higher" ,async (req,res)=>{
    try{
        const user= await User.find({Price:{$gt:500}},{Product_name:1,Price:1,_id:0}).lean().exec();
        return res.status(200).send(user)
    }catch(err){
        return res.status({error:err.message})
    }
})

app.get("/color" ,async (req,res)=>{
    try{
        const user= await User.find({$and:[{Colour:"Pink"},{Colour:"Yellow"},{Colour:"Orange"}]},{Product_name:1,Price:1,_id:0,Colour:1}).lean().exec();
        return res.status(200).send(user); 
    }catch(err){
        return res.status({error:err.message})
    }
})

app.get("/colors" ,async (req,res)=>{
    try{
        const user= await User.find({$or:[{Colour:"Pink"}]},{Product_name:1,Price:1,_id:0,Colour:1}).lean().exec();
        return res.status(200).send(user); 
    }catch(err){
        return res.status({error:err.message})
    }
})


app.get("/users/:id",async (req,res)=>{
    try{
        const user= await User.findById(req.params.id).lean().exec();
        return res.status(200).send(user); 
    }catch(err){
        return res.status({error:err.message})
    }
   
})

app.patch("/users/:id",async (req,res)=>{
    try{
        const user= await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(200).send(user); 
    }catch(err){
        return res.status({error:err.message})
    }
   
})

app.delete("/users/:id",async (req,res)=>{
    try{
        const user= await User.findOneAndDelete(req.params.id).lean().exec();
        return res.status(200).send(user)
    }catch(err){
        return res.status(500).send(err.message)
    }
   
})

app.listen(9844,async()=>{
    try{
        await connect()
        console.log("listening 9844");
    }catch(err){
        console.log(err.message);
    }
})
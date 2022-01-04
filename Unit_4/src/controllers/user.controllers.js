const express = require("express");
const user=require("../models/user.model")
const route =express.Router()

route.post("",async (req,res)=>{
    try{
        const user= await User.create(req.body);
        return res.status(201).send(user); 
    }catch(err){
        return res.status(500).send(err.message);
    }
   
})

route.get("/:id",async (req,res)=>{
    try{
        const user= await User.findById(req.params.id).lean().exec();
        return res.status(200).send(user); 
    }catch(err){
        return res.status({error:err.message})
    }
   
})

route.patch("/:id",async (req,res)=>{
    try{
        const user= await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(200).send(user); 
    }catch(err){
        return res.status({error:err.message})
    }
   
})



route.delete("/:id",async (req,res)=>{
    try{
        const user= await User.findOneAndDelete(req.params.id).lean().exec();
        return res.status(200).send(user)
    }catch(err){
        return res.status(500).send(err.message)
    }
   
})
module.exports=route;
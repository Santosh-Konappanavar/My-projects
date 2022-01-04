const express = require("express");
const user=require("../models/post.model")
const route =express.Router()

route.post("",async (req,res)=>{
    try{
        const user= await Tag.create(req.body);
        return res.status(201).send(user); 
    }catch(err){
        return res.status(500).send(err.message);
    }
   
})
route.get("",async (req,res)=>{
    try{
        const user= await Tag.find().lean().exec();
        return res.status(201).send(user); 
    }catch(err){
        return res.status(500).send(err.message);
    }
   
})
route.get(":id",async (req,res)=>{
    try{
        const user= await Tag.findById(req.params.id);
        return res.status(201).send(user); 
    }catch(err){
        return res.status(500).send(err.message);
    }
   
})
route.patch(":id",async (req,res)=>{
    try{
        const user= await Tag.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(201).send(user); 
    }catch(err){
        return res.status(500).send(err.message);
    }
})
route.delete(":id",async (req,res)=>{
    try{
        const user= await Tag.findByIdAndDelete(req.params.id);
        return res.status(201).send(user); 
    }catch(err){
        return res.status(500).send(err.message);
    }
})


module.exports=route;
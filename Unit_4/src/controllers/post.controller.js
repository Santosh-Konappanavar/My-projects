const express = require("express");
const user=require("../models/post.model")
const route =express.Router()

route.post("",async(req,res)=>{
    try{
        const user= await Post.create(req.body);
        return res.status(201).send(user); 
    }catch(err){
        return res.status(500).send(err.message);
    }
})
route.get("",async(req,res)=>{
    try{
        const user= await Post.find().populate({path:"user_id",select:{first_name:1}}).populate({path:"tag_id",select:{name:1}}).lean().exec();
        return res.status(201).send(user); 
    }catch(err){
        return res.status(500).send(err.message);
    }
})
route.get(":id",async(req,res)=>{
    try{
        const user= await Post.findById(req.params.id).populate({path:"user_id",select:{email:1}}).populate({path:"tag_id",select:{name:1}}).select({content:1,title:1}).lean().exec();
        return res.status(201).send(user); 
    }catch(err){
        return res.status(500).send(err.message);
    }
})
route.patch(":id",async(req,res)=>{
    try{
        const user= await Post.findByIdAndUpdate(req.params.id,req.body,{new:true}).populate({path:"user_id",select:{email:1}}).populate({path:"tag_id",select:{name:1}}).select({content:1,title:1}).lean().exec();
        return res.status(201).send(user); 
    }catch(err){
        return res.status(500).send(err.message);
    }
})

route.delete(":id",async(req,res)=>{
    try{
        const user= await Post.findById(req.params.id)
        return res.status(201).send(user); 
    }catch(err){
        return res.status(500).send(err.message);
    }
})

module.exports=route;
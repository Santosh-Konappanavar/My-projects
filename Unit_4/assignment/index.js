const express = require("express")
const mongoose = require("mongoose")

const connect=()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/web13")
}

const userschema=new mongoose.Schema({
    book_name:{type:String,required:true},
    author_name:{type:String,required:false},
    price:{type:String,required:true},
   
},{
    versionKey:false,
    timestamps:true

})

const User=mongoose.model("users",userschema);



//section and schema
const sectionSchema= new mongoose.Schema({
    name:{type:String,required:true},
},{
    versionKey:false,
    timestamps:true

});
const Section=mongoose.model("section",sectionSchema);


//books schema
const bookSchema=new mongoose.Schema({
    name:{type:String,required:true},
    body:{type:String,required:true},
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true,
    },
    section_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"section",
        required:true,
    }]
},{
    versionKey:false,
    timestamps:true

})
const Book=mongoose.model("book",bookSchema);

//author Schema
const authorSchema= new mongoose.Schema({
    firstname:{type:String,required:true},
    books_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"books",
        required:true,
    }
},{
    versionKey:false,
    timestamps:true

})
const Author=mongoose.model("author",authorSchema);



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

// section CRUD

app.post("/section",async (req,res)=>{
    try{
        const user= await Section.create(req.body);
        return res.status(201).send(user); 
    }catch(err){
        return res.status(500).send(err.message);
    }
   
})
app.get("/section",async (req,res)=>{
    try{
        const user= await Section.find().lean().exec();
        return res.status(201).send(user); 
    }catch(err){
        return res.status(500).send(err.message);
    }
   
})
app.get("/section:id",async (req,res)=>{
    try{
        const user= await Section.findById(req.params.id);
        return res.status(201).send(user); 
    }catch(err){
        return res.status(500).send(err.message);
    }
   
})
app.patch("/section:id",async (req,res)=>{
    try{
        const user= await Section.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(201).send(user); 
    }catch(err){
        return res.status(500).send(err.message);
    }
})
app.delete("/setion:id",async (req,res)=>{
    try{
        const user= await Section.findByIdAndDelete(req.params.id);
        return res.status(201).send(user); 
    }catch(err){
        return res.status(500).send(err.message);
    }
})


// ----------------books CRUD------------
app.post("/book",async(req,res)=>{
    try{
        const user= await Book.create(req.body);
        return res.status(201).send(user); 
    }catch(err){
        return res.status(500).send(err.message);
    }
})
app.get("/book",async(req,res)=>{
    try{
        const user= await Book.find().populate({path:"user_id",select:{book_name:1}}).populate({path:"section_id",select:{name:1}}).lean().exec();
        return res.status(201).send(user); 
    }catch(err){
        return res.status(500).send(err.message);
    }
})
app.get("/book:id",async(req,res)=>{
    try{
        const user= await Book.findById(req.params.id).populate({path:"user_id",select:{book_name:1}}).populate({path:"section_id",select:{name:1}}).select({firstname:1}).lean().exec();
        return res.status(201).send(user); 
    }catch(err){
        return res.status(500).send(err.message);
    }
})
app.patch("/book:id",async(req,res)=>{
    try{
        const user= await Book.findByIdAndUpdate(req.params.id,req.body,{new:true}).populate({path:"user_id",select:{book_name:1}}).populate({path:"tag_id",select:{name:1}}).select({firstname:1}).lean().exec();
        return res.status(201).send(user); 
    }catch(err){
        return res.status(500).send(err.message);
    }
})

app.delete("/book:id",async(req,res)=>{
    try{
        const user= await Book.findById(req.params.id)
        return res.status(201).send(user); 
    }catch(err){
        return res.status(500).send(err.message);
    }
})

// ======comment session
app.post("/author",async(req,res)=>{
    try{
        const user= await Author.create(req.body)
        return res.status(201).send(user); 
    }catch(err){
        return res.status(500).send(err.message);
    }
})

app.get("/author",async(req,res)=>{
    try{
        const user= await Author.find().lean().exec()
        return res.status(201).send(user); 
    }catch(err){
        return res.status(500).send(err.message);
    }
})
app.get("/author:id",async(req,res)=>{
    try{
        const user= await Author.findById(req.params.id).populate({path:"user_id",select:{book_name:1}}).populate({path:"section_id",select:{name:1}}).select({name:1,body:1}).lean().exec();
        return res.status(201).send(user); 
    }catch(err){
        return res.status(500).send(err.message);
    }
})
app.patch("/author:id",async(req,res)=>{
    try{
        const user= await Author.findById(req.params.id).populate({path:"user_id",select:{book_name:1}}).populate({path:"section_id",select:{name:1}}).select({name:1,body:1}).lean().exec();
        return res.status(201).send(user); 
    }catch(err){
        return res.status(500).send(err.message);
    }
})
app.delete("/author:id",async(req,res)=>{
    try{
        const user= await Author.findById(req.params.id)
        return res.status(201).send(user); 
    }catch(err){
        return res.status(500).send(err.message);
    }
})



app.listen(428,async()=>{
    try{
        await connect()
        console.log("listening 428");
    }catch(err){
        console.log(err.message)
    }
  
})

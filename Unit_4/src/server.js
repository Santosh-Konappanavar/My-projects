const express = require("express")


const usercontrollers=require("./controllers/user.controllers");
const tagcontroler=require("./controllers/tag.controller");
const postcontroller=require("./controllers/post.controller")
const commentcontroler=require("./controllers/comment.controller")


const app=express();
app.use(express.json())

app.use("/users",usercontrollers)
app.use("/tag",tagcontroler)
app.use("/post",postcontroller)
app.use("/comment",commentcontroler)


module.exports = app
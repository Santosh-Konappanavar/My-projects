const connect=require("./configs/db")
const app=require("./server")

app.listen(428,async()=>{
    try{
        await connect()
        console.log("listening 428");
    }catch(err){
        console.log(err.message)
    }
})
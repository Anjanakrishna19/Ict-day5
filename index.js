//1.npm init
//2.npm i express
//3.importing express

var express = require("express");
//4.Initialization
var app=express();
//db connection
require("./db");
//get model file
var students = require("./model/student");
//middleware
app.use(express.json());
//install cors
 var cors=require('cors')
 app.use(cors())

//5.port assigning
var port = 3000;

//api to get data
app.get('/',(req,res)=>{
    res.send("hello");
})

//api to add data to db
app.post('/',async(req,res) =>{
    try {
       await students(req.body).save();
       res.send("Data added") 
    } catch (error) {
        
    }
});
//api to add data from db
app.get("/view",async(req,res) => {
    try{
        var data = await students.find();
        res.send(data);
    }  catch (error)
     {
            res.send(error);
        }
});
//api to delete document from db
app.delete('/:id',async(req,res)=>{
    try{
        await students.findByIdAndDelete(req.params.id);
        res.send("Student deleted");
    }  catch( error){
        res.send(error);
    }
});
//api to update a document
app.put('/:id',async(req,res)=>{
    try{
        await students.findByIdAndUpdate(req.params.id,req.body);
        res.send("Student data updated")
    } catch (error){
       res.send(error); 
    }
});
 





// server in listening state
app.listen(port, () => {
    console.log(`server is up and running in ${port}`);
});
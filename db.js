
var mongoose =require("mongoose");

mongoose.connect("mongodb+srv://anjanakrishnakr29:ANJANAKRISHNAKR@cluster0.sd8hnmi.mongodb.net/openICT?retryWrites=true&w=majority&appName=Cluster0")
.then(() =>{
    console.log('Db connected')
})
.catch ((err) =>{
    console.log(err)
});

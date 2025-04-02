const express = require("express")
const app = express();

// app.use( "/",(req,res)=>{
//     res.send("hello  from dashboard");
// })

app.use( "/hello",(req,res)=>{
    res.send("hello  hello!");
})

app.use( "/test",(req,res)=>{
    res.send("hello from the server!");
})
app.listen(3000 , ()=>{
    console.log("server is sucessfull running on port 3000");
});
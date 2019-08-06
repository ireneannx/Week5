const express = require('express');

const app = express();
const port = 1234;

// app.get('/',(req,res)=>{
//     res.send("hello welcome to root page")
// })

app.get("/registration",(req,res)=>{
    res.send("this is the registration page")
})

//link to login.html in static folder
app.use(express.static("static")); //express.static will by default take /. Priority is given to whicherver line comes first. Since / is already defined in line 6, it will not read static file. Thaz why i've commented it 

//keep an index file in each folder (such as for login folder. browser will automatically go to index.html in that folder)
// url to get to login page : http://localhost:1234/login/

app.listen(port,()=>{console.log(`server started at ${port}`)});

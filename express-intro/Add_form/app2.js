//this is an extension of the previous app.js. Learn how to connect details input into a form from the frontend and append it to a txt tile in the backend
// details of body-parer module: https://www.npmjs.com/package/body-parser

const express = require("express");
const fs = require("fs");
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); //this to send the data through the form you built
 
// parse application/json
app.use(bodyParser.json()); //this gives you the additional option of sending your data as a json object.

app.use(express.static("static")); //for you to link to the static folder. By default, starts from /

//the home page will be here
app.get("/", (req,res)=>{
    res.end("this is the home page");
})
//use app.post when you wanna get some input from your client. app.get is used when you simply wanna show some data as your response 

//going to the contact page because user wil be inputing data over there 
app.post("/static/contact", (req,res)=>{
    
    let name= req.body.name;
    let message = req.body.message;
    let phone = req.body.phone;
    let email = req.body.email;

    let text_data = JSON.stringify({"name": name, "phone": phone, "email": email, "message": message})+"\n";//add additional
    
    fs.appendFile("details.txt",text_data, (err)=>{
        if(err) throw err;
        console.log("Success");
    })

    //res.json({"Status": "Success"}); //you can choose to alse respond by showing them this json object
    res.redirect("https://www.google.com/"); //redirects you to google after you submit
})

app.listen(port,()=>{
    console.log(`Server started at ${port}`);
});


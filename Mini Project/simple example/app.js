//this is an extension of the previous app2.js under Add Form. This will push the user details to MongoDB server 

const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
//for sending data to database 
const mongo = require('mongodb').MongoClient //you get the MongoClient object from it which is a NodeJs Module That Lets You Manipulate,Create,Connect To A Mongo Database
const url = 'mongodb://localhost:27017'
//body-parser extract the entire body portion of an incoming request stream and exposes it on req.body.
app.use(bodyParser.urlencoded({ extended: false })); //this to send the data through the form you built
app.use(bodyParser.json()); //this gives you the additional option of sending your data as a json object.

app.use(express.static("static")); //for you to link to the static folder. By default, starts from /


//contact page 
app.post("/", (req, res) => {

    let name = req.body.name;
    let message = req.body.message;
    let phone = req.body.phone;
    let email = req.body.email;

    let text_data = { "name": name, "phone": phone, "email": email, "message": message };

    //connect to MongoDB :
    mongo.connect(url, (err, client) => { //client is the initialised db object within your database. 
        
        if (err) {
            console.error(err)
            return
        }
        //if no error
        //create database (or use if it already exists)
        const db = client.db('contacts')

        //create/use collection
        const collection = db.collection('peeps')

        collection.insertOne({ text_data }, (err, result) => {
            if (err) {
                throw err;
            }
            console.log("sucess")
            client.close()
        })
    })

    res.redirect("https://www.google.com/"); 
})

app.listen(port, () => {
    console.log(`Server started at ${port}`);
});
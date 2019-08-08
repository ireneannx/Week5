const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 5001;
const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
//body-parser extract the entire body portion of an incoming request stream and exposes it on req.body.
app.use(bodyParser.urlencoded({ extended: false })); //this to send the data through the form you built
app.use(bodyParser.json()); 

app.listen(port, () => {
    console.log(`Server started at ${port}`);
});

// POST is from client to server
// GETis from server to client

//post from body of homepage /
app.post("/", (req, res) => {

    let title = req.body.title;
    let category = req.body.category;
    let specs = req.body.specification;
    let price = req.body.price;
    let des = req.body.description;

    let text_data = { "Title": title, "Category": category, "Specification": specs, "price": price,"Description": des};

    //connect to MongoDB :
    mongo.connect(url, (err, client) => { //client is the initialised db object within your database. 
        
        if (err) {
            console.error(err)
            return
        }
        //if no error
        //create database (or use if it already exists)
        const db = client.db('cart')

        //create/use collection
        const collection = db.collection('items')

        collection.insertOne({ text_data }, (err, result) => {
            if (err) {
                throw err;
            }
            console.log("sucess")
            client.close()
        })
    })

    res.end();
})

//read what is already in cart GET
app.get("/",(req,res)=>{

    //connect to MongoDB :
    mongo.connect(url, (err, client) => { //client is the initialised db object within your database. 
        
        if (err) {
            console.error(err)
            return
        }
        //if no error
        //create database (or use if it already exists)
        const db = client.db('cart')
        //create/use collection
        const collection = db.collection('items')

        collection.find().toArray((err, items) => {
            if(err){
                throw err;
            }
            client.close();
            console.log("success");
            res.json(items);
          })    
    })

})


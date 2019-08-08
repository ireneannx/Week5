var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var customerRouter = require('./app/routes/customer.routes')

//to get body data from customerRouter
app.use(bodyParser.json()); 

//initiLise routes
app.use("/api", customerRouter)

//create a server
server = app.listen(8081, () => {
    // console.log(server);
    var port = server.address().port;
    console.log(`App listening at http://localhost:${port}`);
})


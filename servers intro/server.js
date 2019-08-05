//this is the second example of creating a node server. This one's got multiple url endpoints

var http = require('http');
var port = 3000;

//create a server object
const server = http.createServer(function(request,response){
    //response.writeHead(200, {'Content-Type': 'text/html'}); //http header
    var url = request.url;

    if(url ==='/about'){
        response.write('<h1>about us page<h1>'); //write a response
        response.end(); //end the response
     }else if((url==='/home')||(url==='/')){
         response.write('<h1>Home page</h1>');
         response.end(); //end response 
     }else if(url ==='/contact'){
        response.write('<h1>contact us page<h1>'); //write a response
        response.end(); //end the response
     }else{
        response.write('<h1>not a particular page<h1>'); //write a response
        response.end(); //end the response
     }
    })
    
    server.listen((port), function(){
     console.log("server started at port 3000"); //the server object listens on port 3000
    });
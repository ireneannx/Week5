const http = require("http"); //loads the http module
const fs = require("fs"); //loads the filesystem module. allows you to work with the file system on your computer.
//Common use for the File System module:
//Read files
//Create files
//Update files
//Delete files
//Rename files
const port = 5000; 

//create a server 
const server = http.createServer(function(request, response) {
  
  var url = request.url; 

  if (url === "/home" || url === "/") { //searches if your url ends with /home or /
    fs.readFile("serverindex.html", null, function(err, html) { //.readFile method is used to read files ON YOUR COMPUTER. Takes 3 arguments: path, encoding, flag. 2 arguments passed to cb func, first is always error

      if (err) {
        response.writeHead(404);
        response.write("File not found bro");
      } else { //if all okay
        response.write(html);
      }
      response.end();
    });
  } else if (url === "/about") {
    fs.readFile("about.html", null, function(err, html) {
        if (err) {
            response.writeHead(404);
            response.write("File not found :(");
        }else{
          response.write(html);
      }
      response.end();
    });
    // response.end(); //end response
  } else if (url === "/contact") {
    response.write("<h1>contact us page<h1>"); //write a response
    response.end(); //end the response
  } else {
    response.write("<h1>not a particular page<h1>"); //write a response
    response.end(); //end the response
  }
});

server.listen(port, function() {
  console.log("server started at port 5000"); //the server object listens on port 3000
});

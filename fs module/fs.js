//https://www.tutorialspoint.com/nodejs/nodejs_file_system.htm
var fs= require("fs");

//--------------------READ (simple)
// Asynchronous read
// fs.readFile('input.txt', function (err, data) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("Asynchronous read: " + data.toString());
// });

// // Synchronous read
// var data = fs.readFileSync('input.txt');
// console.log("Synchronous read: " + data.toString());

// console.log("Program Ended");

//----------------Open a file fs.open(path, flags[, mode], callback)

// // Asynchronous - Opening File
// console.log("Going to open file!");
// fs.open('input.txt', 'r+', function(err, fd) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("File opened successfully!");     
// });

//-------------------Get File information fs.stat(path, callback)

// console.log("Going to get file info!");
// //getting stats of input.txt 
// fs.stat('input.txt', function (err, stats) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log(stats);
//    console.log("Got file info successfully!");

//    // Check file type
//    console.log("isFile ? " + stats.isFile());
//    console.log("isDirectory ? " + stats.isDirectory());  
//    console.log("isBlockDevice ? " + stats.isBlockDevice());  
// });

//-------------------write into a file fs.writeFile(filename, data [,options], callback) This will overwrite the file if file already exists.

// console.log("going to write into existing file!");
// fs.writeFile('input.txt', 'this is done by writeFile!', function (err) {
//    if (err) {
//       return console.log(err);
//    }
//    console.log("Data written successfully!");
//    console.log("Lets read newly written data");

//    fs.readFile('input.txt', function(err,data){ //to read
//       if(err){
//          return console.log(err);
//       }
//       console.log("Asynchronous read: "+data.toString());
//       console.log(data); //this shows you the data type which is buffer 
//    })
// });

//-------------------READING A FILE fs.read

// var buf = new Buffer(1024);
// console.log("Going to open an existing file");
// fs.open('input.txt', 'r+', function(err, fd) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("File opened successfully!");
//    console.log("Going to read the file");
   
//    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
//       if (err){
//          console.log(err);
//       }
//       console.log(bytes + " bytes read");
      
//       // Print only read bytes to avoid junk.
//       if(bytes > 0){
//          console.log(buf.slice(0, bytes).toString());
//       }
//    });
// });

//-----------------------------CLOSING A FILE fs.close(fd, callback)

// var buf = new Buffer.alloc(1024);
// console.log("going to open an existing file");
// fs.open('input.txt', 'r+', function(err,fd){
//    if(err){
//       return console.log(err);
//    }

//    console.log("File opened successfully!");
//    console.log("Going to read the file");

//    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
//       if (err) {
//          console.log(err);
//       }

//       // Print only read bytes to avoid junk.
//       if(bytes > 0) {
//          console.log(buf.slice(0, bytes).toString());
//       }

//       // Close the opened file.
//       fs.close(fd, function(err) {
//          if (err) {
//             console.log(err);
//          } 
//          console.log("File closed successfully.");
//       });
//    });
// })

//-------------------------------------------------Truncate fs.ftruncate(fd, len, callback)
// var buf = new Buffer(1024);

// console.log("Going to open an existing file");
// fs.open('input.txt', 'r+', function(err,fd){
//    if(err){
//       return console.log(err);
//    }
//    console.log("File opened successfully!");
//    console.log("Going to truncate file after 10 bytes");

//    //to truncate
//    fs.ftruncate(fd,10,function(err){
//       if(err){
//          console.log(err);
//       }
//       console.log("file truncated successfully");
//    })

//    //to close
//    fs.close(fd, function(err){
//       if(err){
//          console.log(err);
//       }
//       console.log("file closed")
//    })
// })

//----------------------------------------------------Delete
//fs.unlink(path, callback)

// console.log("Going to delete an existing");
// fs.unlink('input.txt', (err)=>{
//    if(err){
//       console.log(err);
//    }
//    console.log("file deleted successfully");
// });

//-------------------------------------------------Create a Directory
// fs.mkdir('', (err)=>{ //creates in root!
//    if(err){
//        return console.log(err);
//    }
//    console.log("directory created");
// })

//r-------------------------remove directory
//fs.dir(path,callback)

//read directory  fs.readdir(path, callback)







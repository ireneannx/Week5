//this contains methods for executing URL requests 

var customers = {
    customer1: {
        firstname: "Jack",
        lastname: "Davis",
        age: 25,
        id: 1
      },
      customer2: {
        firstname: "Mary",
        lastname: "Taylor",
        age: 37,
        id: 2
      },
      customer3: {
        firstname: "Peter",
        lastname: "Thomas",
        age: 17,
        id: 3
      },
      customer4: {
        firstname: "Peter",
        lastname: "Thomas",
        age: 17,
        id: 4
      }
}
//exports is an object, so you can attach properties or methods to it which can be exported

exports.findAll =(req,res)=>{
    console.log("All Customers \n" + JSON.stringify(customers,null,4));
    
    res.end("Success")
}
//or module.exports.create = {bladabla}

exports.create = (req, res)=>{
    var newCustomer = req.body;
    customers["customer" + newCustomer.id] = newCustomer;
    // so this will be added to the customers object as customer5 = {...all the req.body..}
    console.log("----> After Post, customers: \n"+ JSON.stringify(customers, null, 4));
    //console.log(req.body)
    // able to access body parser since this is exported to customer.routes which is exported to server.js
    res.end("Post successfully")
}

exports.findOne = (req,res)=>{
    var customer = customers["customer"+]
}


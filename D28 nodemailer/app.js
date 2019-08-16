const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer')
const app = express();
//if heroku then will send it to the new environment, if it doesnt exist then it will automatically go to 1234
const port = process.env.PORT||1234;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); //this to send the data through the form you built
app.use(bodyParser.json()); //this gives you the additional option of sending your data as a json object.
app.use(express.static("static")); //for you to link to the static folder. By default, starts from /


let transporter = nodemailer.createTransport({
    host: "mail.ireneann.com",
    port: 465,
    secure: true,
    auth: {
        user: "me@ireneann.com",
        pass: "codeTRASH@01"
    }
});

app.post("/", (req, res) => {

    transporter.sendMail({
        from: '"Irene Inc" <me@ireneann.com>', // sender address
        to: "irenephantrash@gmail.com", // list of receivers
        subject: "Contact form details ", // Subject line
        text: "Hello world?", // plain text body
        html: `<b>${req.body.message}</b>` // html body
    }).then((info) => {
        console.log("Message sent: %s", info.messageId);
    }).catch(() => {
        console.log("something went wrong.")
    })


    res.redirect("/success");
});

app.get("/success",(req,res)=>{
    res.send("<h1><center>Sent email successfully</h1></centre>")
})

app.listen(port, () => {
    console.log(`Server started at ${port}`);
})
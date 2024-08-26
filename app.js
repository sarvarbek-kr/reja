console.log("Web Serverni boshlash");
const express = require("express");
const app = express();


/// MongoDB chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");

// 1.  Kirish code 

app.use(express.static("public"));  ///google chrome expresga request qiganda :clientlarga faqat public folderi ochiq deganini anglatadi
app.use(express.json()); //express bu yerda json formatdagi datani objectga ogirib beradi bizga.
app.use(express.urlencoded({extended: true})); //htmlda formda post qiganini express qabul qiladi.
 
// 2. sessionlar codei

// 3. Views code

app.set("views", "viewsFolder");
app.set("view engine", "ejs");   /// ejs orqali (html) yani froont endni yasemiz back end ichida.

// 4. Routing code
app.post("/create-item", (req, res) => {
    console.log("user entered / create-items");
   const new_reja = req.body.reja;
   db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
    
    res.json(data.ops[0]);
   });
});

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne({_id: new mongodb.ObjectId (id)}, function(err, data) {
      res.json({ state: "success"});
    });
    
});


app.get('/', function (req, res) {
    console.log("user entered /");
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log("====bu 43 line");
            res.end("something went wrong");
        } else {
            res.render("reja", {items: data});
        }
    });
});

module.exports = app;

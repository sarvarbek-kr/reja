console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response")
const app = express();


/// MongoDB chaqirish
const db = require("./server").db();

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
   
});

app.get('/', function (req, res) {
    res.render("reja");
});

module.exports = app;


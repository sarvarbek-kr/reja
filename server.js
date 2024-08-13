console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

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
    console.log(req.body);
    res.json({ test: "succes"});
})

app.get('/', function (req, res ) {
    res.render("harid");
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`);
});
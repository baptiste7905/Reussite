const path = require('path')
const db = require("./db")
const express = require('express');
const cookieParser = require('cookie-parser')

const app = express()
const hostname = '127.0.0.1';
const port = 3000;


app.use(cookieParser());

app.use("/static", express.static(path.join(__dirname, '/static')))

app.get("/index.html", (req, res) => {
    res.redirect(301, "/static/index.html")
})


app.get("/static/play", (req, res) => {
    nom = req.query["name"]
    
    res.cookie("player", nom)
    res.redirect(301, "/static/game.html")
})

app.use((req, res) => {
    
    
    console.log("404 ! : " + req.url);
    res.end("CANNOT "+req.method+" "+ req.url);

})

app.listen(port, hostname);
console.log(`Server running at http://${hostname}:${port}/`);
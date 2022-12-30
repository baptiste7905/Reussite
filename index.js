const path = require('path')
const db = require("./db")
const express = require('express');
const { readSync } = require('fs')

const app = express()
const hostname = '127.0.0.1';
const port = 3000;



app.get("/index.html", (req, res) => {
    res.statusCode = 200;
    res.sendFile("index.html",{ root : __dirname})
})

app.get("/play", (req, res) => {
    nom = req.query["name"]
    db.model.Classement.create({
        nom : nom
    })

})

app.use((req, res) => {
    
    
    console.log("404 ! : " + req.url);
    res.end("CANNOT "+req.method+" "+ req.url);

})

app.listen(port, hostname);
console.log(`Server running at http://${hostname}:${port}/`);
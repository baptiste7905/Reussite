const path = require('path')
const db = require("./db")
const express = require('express');
const cookieParser = require('cookie-parser')
const tirage = require('./back/tirage')

const app = express()
const hostname = '127.0.0.1';
const port = 3000;


app.use(cookieParser());

app.use("/static", express.static(path.join(__dirname, '/static')))

app.get("/index.html", (req, res) => {
    res.redirect(301, "/static/index.html")
})


app.get("/static/play", (req, res) => {
    var nom = req.query["name"]

    var pos_aleatoire = tirage.tirage_position()
    console.log(pos_aleatoire)
    for (let i=0;i<32;i++) {
        db.model.cartes.findByPk(i+1).then(async data=>{

            data.position = pos_aleatoire[i];
            await data.save();
        })

        
    }
    
    res.cookie("player", nom)

    res.end();
})



app.get("/static/carte", (req,res) => {
    
    
    pos = req.query["position"]

    db.model.cartes.findOne({
        where : {
            position: pos
        }
    }).then(data=>{
        res.json({
            nom : data.nom
        });
    })

})

app.get("/static/classement.html", (req, res) => {
    req.cookies.
})

app.use((req, res) => {
    
    
    console.log("404 ! : " + req.url);
    res.end("CANNOT "+req.method+" "+ req.url);

})

app.listen(port, hostname);
console.log(`Server running at http://${hostname}:${port}/`);
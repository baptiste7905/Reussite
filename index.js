const path = require('path')
const db = require("./db")
const express = require('express');
const cookieParser = require('cookie-parser')
const tirage = require('./back/tirage');
const { where } = require('sequelize');

const app = express()
const hostname = '127.0.0.1';
const port = 3000;

var cpt, cptSeven;

app.use(cookieParser());


app.use("/static", express.static(path.join(__dirname, '/static')))

app.get("/", (req, res) => {
    res.redirect(301, "/static/index.html")
})


app.get("/static/play", (req, res) => {
    
    
    cpt = 0;
    cptSeven = 0;

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



app.get("/static/tirage", (req, res)=>{
    if (cpt<4){
        
        console.log(cpt)
        db.model.cartes.findOne({
            where :{
                position : 28+cpt
            }
        }).then(data=>{
            
            
            cpt++;
            res.json({
                nom : data.nom,
                isBlocked : false
            })
        })


    }
    else {

        res.json({

            isBlocked : true
    
        })

    }
    
})

// app.get("/static/carte", (req,res) => {
    
    
//     pos = req.query["position"]
    // var new_card;
    // tmp = req.query["current"]
    // tmp = tmp.split("/")[2]
    
    // current = tmp.split(".")[0]


//     db.model.cartes.findOne({
//         where : {
//             position: pos
//         }
//     }).then(async data=>{
        
//         new_card = data.nom
//         console.log(new_card)
//         data.nom = current;
        
//         await data.save();
        
//         await console.log(data.nom)
//         await console.log(new_card)
//         await res.json({
            
//             nom : new_card,
//             current : current

            
//         });
//     })

// })

app.get("/static/carte", (req,res) => {
    
    
    
    var new_card;
    tmp = req.query["current"]
    console.log(tmp.split("/"))
    tmp = tmp.split("/")[5]
    
    pos = req.query["position"]
    current = tmp.split(".")[0]
    console.log(current)

    db.model.cartes.findOne({
        where : {
            position: pos
        }
    }).then(async data=>{
        // Sauvegarde la valeur de la carte sous-jacente dans new_card + update de la position de celle-ci (-1 pour identifier le pointeur)
        
        new_card = await data.nom
        data.position = -1;
        await data.save();

        db.model.cartes.findOne({
            where : {
                nom : current
            }
        }).then(async data=>{
            // Update de la position de la carte courante vers la carte sous-jacente
            data.position = pos
            await data.save();

            res.json({
                
                new_card : new_card,

            })


        })
    })

})


app.use((req, res) => {
    
    
    console.log("404 ! : " + req.url);
    res.end("CANNOT "+req.method+" "+ req.url);

})

app.listen(port, hostname);
console.log(`Server running at http://${hostname}:${port}/`);
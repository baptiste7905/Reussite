const db = require("./db.js")

async function initDB() {
    await db.sequelize.sync({force: true})
    
    var data = await db.model.cartes.create({
        nom: "1_coeur",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "R_coeur",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "D_coeur",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "V_coeur",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "10_coeur",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "9_coeur",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "8_coeur",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "7_coeur",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "1_carreau",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "R_carreau",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "D_coeur",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "V_carreau",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "10_carreau",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "9_carreau",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "8_carreau",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "7_carreau",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "1_trefle",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "R_trefle",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "D_trefle",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "V_trefle",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "10_trefle",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "9_trefle",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "8_trefle",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "7_trefle",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "1_pique",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "R_pique",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "D_pique",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "V_pique",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "10_pique",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "9_pique",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "8_pique",
        position_c: 0,
        position_l :0,
    })

    data = await db.model.cartes.create({
        nom: "7_pique",
        position_c: 0,
        position_l :0,
    })


}

initDB()
    .then(() => {
        db.model.cartes.findAll({
            attributes : ['nom']
        }).then(data =>{
            for (element of data) {
                console.log(element.nom)
            }
            
        });
        console.log('base init')
    })

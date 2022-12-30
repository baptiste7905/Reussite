const db = require("./db")

async function initDB() {
    await db.sequelize.sync({force: true})
    
    var data = await db.model.cartes.create({
        nom: "1_coeur",
        position : 0
    })

    data = await db.model.cartes.create({
        nom: "R_coeur",
        position : 0
    })

    data = await db.model.cartes.create({
        nom: "D_coeur",
        position : 0
    })

    data = await db.model.cartes.create({
        nom: "V_coeur",
        position : 0
    })

    data = await db.model.cartes.create({
        nom: "10_coeur",
        position : 0
    })

    data = await db.model.cartes.create({
        nom: "9_coeur",
        position : 0
    })

    data = await db.model.cartes.create({
        nom: "8_coeur",
        position : 0,
    })

    data = await db.model.cartes.create({
        nom: "7_coeur",
        position : 0,
    })

    data = await db.model.cartes.create({
        nom: "1_carreau",
        position : 0,
    })

    data = await db.model.cartes.create({
        nom: "R_carreau",
        position : 0,
    })

    data = await db.model.cartes.create({
        nom: "D_coeur",
        position : 0,
    })

    data = await db.model.cartes.create({
        nom: "V_carreau",
        position : 0,
    })

    data = await db.model.cartes.create({
        nom: "10_carreau",
        position : 0,
    })

    data = await db.model.cartes.create({
        nom: "9_carreau",
        position : 0,
    })

    data = await db.model.cartes.create({
        nom: "8_carreau",
        position : 0,
    })

    data = await db.model.cartes.create({
        nom: "7_carreau",
        position : 0,
    })

    data = await db.model.cartes.create({
        nom: "1_trefle",
        position : 0,
    })

    data = await db.model.cartes.create({
        nom: "R_trefle",
        position : 0,
    })

    data = await db.model.cartes.create({
        nom: "D_trefle",
        position : 0,
    })

    data = await db.model.cartes.create({
        nom: "V_trefle",
        position : 0,
    })

    data = await db.model.cartes.create({
        nom: "10_trefle",
        position : 0,
    })

    data = await db.model.cartes.create({
        nom: "9_trefle",
        position : 0,
    })

    data = await db.model.cartes.create({
        nom: "8_trefle",
        position : 0,
    })

    data = await db.model.cartes.create({
        nom: "7_trefle",
        position : 0,
    })

    data = await db.model.cartes.create({
        nom: "1_pique",
        position : 0,
    })

    data = await db.model.cartes.create({
        nom: "R_pique",
        position : 0,
    })

    data = await db.model.cartes.create({
        nom: "D_pique",
        position : 0,
    })

    data = await db.model.cartes.create({
        nom: "V_pique",
        position : 0,
    })

    data = await db.model.cartes.create({
        nom: "10_pique",
        position : 0,
    })

    data = await db.model.cartes.create({
        nom: "9_pique",
        position : 0,
    })

    data = await db.model.cartes.create({
        nom: "8_pique",
        position : 0,
    })

    data = await db.model.cartes.create({
        nom: "7_pique",
        position : 0,
    })


}

initDB()
    .then(() => {
    
        console.log('base init')
    
    })
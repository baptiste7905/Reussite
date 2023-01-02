var chance = require('chance').Chance()

tirage_position = () => {
    return chance.unique(chance.integer, 32, {min: 0, max: 31});
}



module.exports = {
    tirage_position : tirage_position
}
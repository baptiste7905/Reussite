var chance = require('chance').Chance()

tirage_position = () => {
    return chance.unique(chance.integer, 32, {min: 0, max: 31});
}

tirage_carte = (cpt) => {

    new_tirage = 28+cpt;
    if (new_tirage>33) {
        return false;
    }

    return true;

}

module.exports = {
    tirage_position : tirage_position,
    tirage_carte : tirage_carte
}
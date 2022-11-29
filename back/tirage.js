var chance = require('chance').Chance()

var tirage_position = chance.unique(chance.integer, 32, {min: 0, max: 31});


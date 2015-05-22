var cocktail = require('cocktail');

var withFirst = require('./withFirst');
var withLast = require('./withLast');
var withIterator = require('./withIterator');

cocktail.mix({
    '@exports': module,
    '@as': 'class',

    '@traits': [
        withFirst,
        withLast,
        withIterator
    ]

});

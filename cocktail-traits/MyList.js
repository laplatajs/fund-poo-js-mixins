var cocktail = require('cocktail');

var iterable = require('./traits/iterable');


cocktail.mix({
    '@exports': module,
    '@as': 'class',

    '@traits': [iterable],

    '@properties': {
        collection: null // {Array}
    },

    constructor: function (collection) {
        this.collection = collection;
    },


    first: function(){
        //error!!
    }
});

var cocktail = require('cocktail');

cocktail.mix({
    '@exports': module,
    '@as': 'class',

    '@requires': [
        'getCollection' // {Array}
    ],

    last: function () {
        var collection = this.getCollection(),
            length = collection.length;

        if (!collection && !length ) {
            return null;
        }

        return collection[length-1];
    }

});
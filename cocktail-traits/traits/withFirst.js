var cocktail = require('cocktail');

cocktail.mix({
    '@exports': module,
    '@as': 'class',

    '@requires': [
        'getCollection' // {Array}
    ],

    first: function () {
        var collection = this.getCollection();
        return collection[0] || null;
    }

});

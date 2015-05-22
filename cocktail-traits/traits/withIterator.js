var cocktail = require('cocktail');

cocktail.mix({
    '@exports': module,
    '@as': 'class',

    '@requires': [
        'getCollection' // {Array}
    ],

    iterator: function () {
        var collection = this.getCollection();
        var curr = 0;
        return {
            next: function () {return collection[curr++];}
        };
    }

});
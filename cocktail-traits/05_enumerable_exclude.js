var cocktail = require('cocktail');

var iterable = require('./traits/iterable');

var MyList;

MyList = cocktail.mix({
    '@traits': [
        { 
            trait: iterable,
            excludes: ['first']
        }
    ],

    '@properties': {
        collection: null // {Array}
    },

    constructor: function (collection) {
        this.collection = collection;
    },

    first: function () {
        return  'first!';
    }

});




var list = new MyList([1,2,3,4,5]);

console.log('collection: ', list.getCollection()); // [1,2,3,4,5]
console.log('first: ', list.first()); // 1
console.log('last: ', list.last()); // 5

console.log('iterate:');

var iterator = list.iterator();
var value;

while(value = iterator.next()){
    console.log(value);
}
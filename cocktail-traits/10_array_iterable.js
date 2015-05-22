
var cocktail = require('cocktail');

var iterable = require('./traits/iterable');

// talent, glue code for iterable
var arrayAsCollection = {
    getCollection: function () {return this;} 
}

var v = [1,2,3,4,5];

cocktail.mix(v, {
    '@talents': [ iterable, arrayAsCollection ]
});

console.log('first: ', v.first()); // 1
console.log('last: ', v.last()); // 5

console.log('iterate:');

var iterator = v.iterator();
var value;

while(value = iterator.next()){
    console.log(value);
}

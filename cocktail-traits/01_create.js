var cocktail = require('cocktail');
var MyClass;

MyClass = cocktail.mix({
    '@as': 'class',

    '@properties' : {
        msg: null // {String}
    },

    constructor: function (msg) {
        this.msg = msg
    },

    foo: function () {
        console.log(this.msg + 'from foo');
    }

});

var obj = new MyClass('Hello!');

obj.foo(); // Hello! from foo

//getter because msg is declared as a property
console.log(obj.getMsg()); // Hello!
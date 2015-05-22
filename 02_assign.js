var assign = require('lodash.assign');


var myMixin = {
    fooMix: function () {
        console.log('fooMix');
    }
};

function MyClass () {

}

assign(MyClass.prototype, myMixin);

MyClass.prototype.foo = function () {
    console.log('fooo');
} 


var o = new MyClass();

o.fooMix();
o.foo();


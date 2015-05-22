var assign = require('lodash.assign');


function MyBaseClass() {}

function MyClassA () {}

MyClassA.prototype = Object.create(MyBaseClass.prototype);

MyClassA.prototype.foo = function () {
    console.log('from A');
}

function MyClassB () {}

MyClassB.prototype = Object.create(MyBaseClass.prototype);

MyClassB.prototype.foo = function () {
    console.log('from B');
}

function MyDerivedClass() {}

assign(MyDerivedClass.prototype, MyClassA.prototype, MyClassB.prototype);

/// 

var obj = new MyDerivedClass();

obj.foo(); // from B


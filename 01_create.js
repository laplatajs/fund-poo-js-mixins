// Constructor
function MyClass (msg) {
    this.msg = msg;
};

// Instance method
MyClass.prototype.foo = function () {
    console.log(this.msg);
};


var obj = new MyClass('Hello!');

obj.foo(); // Hello!

console.log('obj.__proto__ === MyClass.prototype ', obj.__proto__ === MyClass.prototype); // true
console.log('MyClass.prototype.__proto__ === Object.prototype ', MyClass.prototype.__proto__ === Object.prototype); //true


// Constructor
function MyDerivedClass () {
    // call parent constructor
    MyClass.apply(this, arguments);
};

// extend
MyDerivedClass.prototype = Object.create(MyClass.prototype);

// Instance method
MyDerivedClass.prototype.bar = function () {
    console.log(this.msg + ' from bar');
};


var objd = new MyDerivedClass('Hello!');

console.log('objd.__proto__ === MyDerivedClass.prototype ', objd.__proto__ === MyDerivedClass.prototype); //true
console.log('MyDerivedClass.prototype.__proto__ === MyClass.prototype ', MyDerivedClass.prototype.__proto__ === MyClass.prototype); //true

objd.foo();  // Hello!
objd.bar();  // Hello! from bar


//borrowing
var instance = {msg: 'Hello from instance'};

MyClass.prototype.foo.apply(instance);
MyDerivedClass.prototype.foo.apply(instance);
MyDerivedClass.prototype.bar.apply(instance);


function Test() {
   this.msg = 'message'; 
}

Test.prototype = null;

var t = new Test();
console.log(t);
console.log('t.__proto__ === Test.prototype ', t.__proto__ === Test.prototype); // false
console.log('t.__proto__ === Object.prototype ', t.__proto__ === Object.prototype); // true

function TestNoObject() {
    this.msg = 'no obj';
}

TestNoObject.prototype = Object.create(null);

TestNoObject.prototype.test = function () {console.log('test!')};

var tno = new TestNoObject();
console.log('tno ', tno);
console.log('tno.__proto__ === Object.prototype ', tno.__proto__ === Object.prototype); // false
console.log('tno.__proto__ === undefined ', tno.__proto__ === undefined); //true
tno.test();

function A(){};

console.log(A.prototype.__proto__ === Object.prototype); //true

var o = Object.create(null);


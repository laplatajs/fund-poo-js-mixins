
function WithFoo () {
    this.foo = function () {
        console.log(this.msg);
    }
    return this;
}

function MixedClass (msg) {
    this.msg = msg;
}

WithFoo.call(MixedClass.prototype);

MixedClass.prototype.bar = function () {
    console.log(this.msg + ' from bar');
}

var obj = new MixedClass('Hello!');

obj.foo(); // Hello!
obj.bar(); // Hello! from bar
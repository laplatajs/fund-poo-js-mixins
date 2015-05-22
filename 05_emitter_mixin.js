var assign = require('lodash.assign');
var Emitter = require('events').EventEmitter;

function MyClass () {
    Emitter.apply(this, arguments);
}

assign(MyClass.prototype, Emitter.prototype);

var obj = new MyClass();

obj.on('event', function () { console.log('event!'); });
obj.emit('event');

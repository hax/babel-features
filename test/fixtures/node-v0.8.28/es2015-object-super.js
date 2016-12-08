'use strict';

var _obj;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var a = {
	foo: function foo() {
		return 'f';
	}
};
var b = _obj = {
	foo: function foo() {
		return _get(_obj.__proto__ || Object.getPrototypeOf(_obj), 'foo', this).call(this) + 'oo';
	}
};
Object.setPrototypeOf(b, a);

assert(b.foo() === 'foo');
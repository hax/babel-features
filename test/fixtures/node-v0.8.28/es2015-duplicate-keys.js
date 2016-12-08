"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var x = _defineProperty({ a: 5 }, "a", 6);
assert(x.a === 6);

var y = _defineProperty({
	get a() {
		return 1;
	}
}, "a", 2);
assert(y.a === 2);
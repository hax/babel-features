'use strict';

var a = { foo() {
		return 'f';
	} };
var b = { foo() {
		return super.foo() + 'oo';
	} };
Object.setPrototypeOf(b, a);

assert(b.foo() === 'foo');
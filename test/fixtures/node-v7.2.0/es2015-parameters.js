"use strict";

function foo() {
	let x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	return x;
}

assert(foo());
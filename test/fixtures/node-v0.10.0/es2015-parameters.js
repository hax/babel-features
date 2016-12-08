"use strict";

function foo() {
	var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	return x;
}

assert(foo());
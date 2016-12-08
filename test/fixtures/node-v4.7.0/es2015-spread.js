"use strict";

function foo(a, b, c) {
	return a + b === c;
}
var list = [2, 3];

assert(foo.apply(undefined, [1].concat(list)));
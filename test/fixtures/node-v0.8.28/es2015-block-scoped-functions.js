"use strict";

var outer = foo();
function foo() {
	return 1;
}

{
	var _foo = function _foo() {
		return 0;
	};

	var inner = _foo();
}

assert(inner === 0 && outer === 1);
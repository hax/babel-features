"use strict";

var outer = foo();
function foo() {
	return 1;
}

{
	var inner = _foo();
	function _foo() {
		return 0;
	}
}

assert(inner === 0 && outer === 1);
"use strict";

var outer = foo();
function foo() {
	return 1;
}

{
	var inner = foo();
	function foo() {
		return 0;
	}
}

assert(inner === 0 && outer === 1);
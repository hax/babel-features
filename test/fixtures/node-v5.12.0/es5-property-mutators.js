"use strict";

var foo = {
	get bar() {
		return true;
	}
};

assert(foo.bar);
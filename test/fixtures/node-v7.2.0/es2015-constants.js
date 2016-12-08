"use strict";

const foo = true;

try {
	foo = false;
} catch (e) {
	assert(foo);
}

assert(foo);
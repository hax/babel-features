"use strict";

class A {
	foo() {
		return false;
	}
}
class B extends A {
	bar() {
		return !super.foo();
	}
}

assert(new B().bar());
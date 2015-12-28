'use strict'

exports.test = function () {
	class A {
		foo() { return true }
	}
	class B extends A {
		bar() { return super.foo() }
	}
	return new B().bar()
}

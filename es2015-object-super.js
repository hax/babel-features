exports.test = function () {
	var a = { foo() { return 'f' } }
	var b = { foo() { return super.foo() + 'oo' } }
	Object.setPrototypeOf(b, a)
	return b.foo() === 'foo'
}

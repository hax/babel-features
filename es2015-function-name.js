exports.test = function () {
	var foo = function () {}
	var obj = { foo: function () {} }
	return foo.name === 'foo' && obj.foo.name === 'foo'
}

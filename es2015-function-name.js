var foo = function () {}

assert(
	foo.name === 'foo'
)

var obj = { bar: function () {} }

assert(
	obj.bar.name === 'bar'
)

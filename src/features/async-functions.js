async function foo(x) {
	return await x
}

var called = false
var p = foo({
	then: function () {
		called = true
		throw 'test async functions'
	}
})

assert(typeof p.then === 'function')
assert(called)

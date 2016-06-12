async function foo(x) {
	return await x
}

var p = foo()

assert(typeof p.then === 'function')

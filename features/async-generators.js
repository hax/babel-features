async function* foo(x) {
	return await x
}
var g = foo()
var p = g.next()
assert(typeof p.then === 'function')

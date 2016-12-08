async function* foo() {
	await 1
	yield 2
	return 3
}

var g = foo()
var p = g.next()

assert(
	typeof p.then === 'function'
)

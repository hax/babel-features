async function foo() {
	return await 1
}

var p = foo()

assert(
	typeof p.then === 'function'
)

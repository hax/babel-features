async function* foo() {
	await 1
	yield 2
	return 3
}

async function bar() {
	for await (const x of foo()) {
		return x
	}
}

var g = foo()
var p = g.next()

assert(
	typeof p.then === 'function'
)

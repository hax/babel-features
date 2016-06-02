function* g() {
	yield 1
	yield 2
	yield 3
}
var foo = g()

assert(
	foo.next().value === 1
)
assert(
	foo.next().value === 2
)
assert(
	foo.next().value === 3
)
assert(
	foo.next().done
)

var result = function* () { return 1 }().next()

assert(
	result.done && result.value === 1
)

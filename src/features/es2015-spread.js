function foo(a, b, c) {
	return a + b === c
}
var list = [2, 3]

assert(
	foo(1, ...list)
)

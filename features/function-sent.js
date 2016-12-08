function* g() {
	assert(
		function.sent === 1
	)
	yield
	assert(
		function.sent === 2
	)
	var x = yield
	assert(
		function.sent === x
	)
}

var test = g()
test.next(1)
test.next(2)
test.next(Math.random())

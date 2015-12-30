exports.test = function () {
	function foo(a, b, c) {
		return a + b === c
	}
	var list = [2, 3]
	return foo(1, ...list)
}

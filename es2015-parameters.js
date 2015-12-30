exports.test = function () {
	function foo(x = true) {
		return x
	}
	return foo()
}

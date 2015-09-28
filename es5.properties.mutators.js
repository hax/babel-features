exports.test = function () {
	var foo = {
		get bar() { return true }
	}
	return foo.bar
}

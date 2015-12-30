exports.test = function () {
	var foo = {["x" + 1]: true}
	return foo.x1
}

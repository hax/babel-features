exports.test = function () {
	function foo() { return this.test }
	var x = {test: true}
	return x::foo()
}

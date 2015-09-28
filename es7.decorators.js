exports.test = function () {
	function ok(x) {
		x.ok = true
	}
	@ok class A {}
	return A.ok
}

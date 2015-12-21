'use strict'

exports.test = function () {
	function* g() {
		yield 1
		yield 2
		yield 3
	}
	var foo = g()
	var ok = true
		&& foo.next().value === 1
		&& foo.next().value === 2
		&& foo.next().value === 3
		&& foo.next().done

	var result = function* () { return 1 }().next()
	ok = ok && result.done && result.value === 1
	
	return ok
}

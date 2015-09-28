'use strict'

exports.test = function () {
	function *g() {
		var x = 0
		try {
			while (true) yield ++x
		} finally {
			return x
		}
	}
	var foo = g()
	foo.next()
	foo.next()
	foo.return()
	return foo.next().done && foo.next().value === 2
}

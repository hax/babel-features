exports.test = function () {
	var closed
	function *g() {
		try {
			closed = false
			while (true) yield
		} finally {
			closed = true
		}
	}
	var foo = g()
	foo.next()
	var result = foo.return('ok')
	var ok = closed && result.done && result.value === 'ok'
	result = foo.next()
	ok = ok && result.done && result.value === undefined

	result = function* () {}().return('ok2')
	return ok && result.done && result.value === 'ok2'
}

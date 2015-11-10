exports.test = function () {
	async function foo(x, y) {
		return await x + await y
	}
	return typeof foo(1, 2).then === 'function'
}

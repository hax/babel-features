async function foo(x, y) {
	return await x + await y
}

foo(1, 2).then(function (value) {

	assert(
		value === 3
	)

})

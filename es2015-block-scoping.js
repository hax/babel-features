let foo = 0, bar = 1
foo += bar
{
	const bar = 2
	foo += bar
}

assert(
	foo === 3
)

switch (0) {
	default:
		const bar = 3
		foo += bar
}

assert(
	foo === 6
)

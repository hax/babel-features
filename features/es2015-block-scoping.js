let foo = 0, bar = 1
foo += bar
{
	const bar = 2
	foo += bar
	for (let bar = 3; bar < 5; foo += bar, ++bar) {
		let bar = 10
		foo += bar
	}
}

assert(
	foo === 30
)

switch (0) {
	default:
		const bar = 3
		foo += bar
}

assert(
	foo === 33
)

const f = []
for (let i = 0; i < 3; ++i) {
	f.push(function () { return i })
}

assert(
	f.length === 3
	&& f[0]() === 0
	&& f[1]() === 1
	&& f[2]() === 2
)
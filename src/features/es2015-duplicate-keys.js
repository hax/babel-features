var x = {a: 5, a: 6}
assert(x.a === 6)

var y = {
	get a() { return 1 },
	a: 2,
}
assert(y.a === 2)

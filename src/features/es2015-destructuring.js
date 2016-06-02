function foo({a, b: b1, c: [x, , y]}) {
	return a === 1 && b1 === 2 && x === 3 && y === 5
}

assert(
	foo({a: 1, b: 2, c: [3, 4, 5]})
)

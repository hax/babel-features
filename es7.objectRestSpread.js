exports.test = function () {
	var a = {x: 1, y: 2}, {x, ...a1, y, ...a2} = {x: 3, ...a, y: 4}
	return x === 1 && y === 4
		&& a1.x === undefined && a1.y === 4
		&& a2.x === undefined && a2.y === undefined
}

var {x, y, ...z} = {x: 1, y: 2, a: 3, b: 4}
assert(Object.keys(z).length === 2 && z.a === 3 && z.b === 4)

var o = {x, y, ...z}
assert(Object.keys(o).length === 4 && o.a === 3 && o.b === 4)

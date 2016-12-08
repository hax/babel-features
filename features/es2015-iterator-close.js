function test() {
	var iterable = {}
	var count = 0
	iterable[Symbol.iterator] = function () {
		return {
			next: function () {
				if (count < 3) return {value: ++count}
				else return {done: true}
			},
			return: function () {
				iterable.closed = true
			}
		}
	}
	return iterable
}

var iterable1 = test()
for (var x of iterable1) break
assert(
	iterable1.closed
)

var iterable2 = test()
var [a] = iterable2
assert(
	iterable2.closed
)

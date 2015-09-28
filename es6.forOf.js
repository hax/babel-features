'use strict'

exports.test = function () {
	var o = {}
	o[Symbol.iterator] = function () {
		var i = 0
		return {
			next: function () {
				if (i < 3) return {value: ++i}
				return {done: true}
			}
		}
	}
	var sum = 0
	for (var x of o) {
		sum += x
	}
	return sum === 6
}

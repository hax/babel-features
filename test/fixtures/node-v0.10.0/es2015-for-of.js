"use strict";

var o = {};
o[Symbol.iterator] = function () {
	var i = 0;
	return {
		next: function next() {
			if (i < 3) return { value: ++i };
			return { done: true };
		}
	};
};
var sum = 0;
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = o[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var x = _step.value;

		sum += x;
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}

assert(sum === 6);
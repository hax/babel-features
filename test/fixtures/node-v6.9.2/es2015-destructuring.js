"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function foo(_ref) {
	let a = _ref.a,
	    b1 = _ref.b;

	var _ref$c = _slicedToArray(_ref.c, 3);

	let x = _ref$c[0],
	    y = _ref$c[2];

	return a === 1 && b1 === 2 && x === 3 && y === 5;
}

assert(foo({ a: 1, b: 2, c: [3, 4, 5] }));
"use strict";

var _marked = [g].map(regeneratorRuntime.mark);

function g() {
	return regeneratorRuntime.wrap(function g$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return 1;

				case 2:
					_context.next = 4;
					return 2;

				case 4:
					_context.next = 6;
					return 3;

				case 6:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this);
}
var foo = g();

assert(foo.next().value === 1);
assert(foo.next().value === 2);
assert(foo.next().value === 3);
assert(foo.next().done);

var result = regeneratorRuntime.mark(function _callee() {
	return regeneratorRuntime.wrap(function _callee$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					return _context2.abrupt("return", 1);

				case 1:
				case "end":
					return _context2.stop();
			}
		}
	}, _callee, this);
})().next();

assert(result.done && result.value === 1);
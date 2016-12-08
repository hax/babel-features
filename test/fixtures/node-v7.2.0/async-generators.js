'use strict';

var _marked = [foo].map(regeneratorRuntime.mark);

function foo(x) {
	return regeneratorRuntime.async(function foo$(_context) {
		while (1) switch (_context.prev = _context.next) {
			case 0:
				_context.next = 2;
				return regeneratorRuntime.awrap(x());

			case 2:
				return _context.abrupt('return', _context.sent);

			case 3:
			case 'end':
				return _context.stop();
		}
	}, _marked[0], this);
}

var g = foo();
var p = g.next();

assert(typeof p.then === 'function');
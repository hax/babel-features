"use strict";

var _marked = [g].map(regeneratorRuntime.mark);

function g() {
	var x;
	return regeneratorRuntime.wrap(function g$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					assert(_context._sent === 1);
					_context.next = 3;
					return;

				case 3:
					assert(_context._sent === 2);
					_context.next = 6;
					return;

				case 6:
					x = _context.sent;

					assert(_context._sent === x);

				case 8:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this);
}

var test = g();
test.next(1);
test.next(2);
test.next(Math.random());
'use strict';

var _marked = [g].map(regeneratorRuntime.mark);

var closed;
function g() {
	return regeneratorRuntime.wrap(function g$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.prev = 0;

					closed = false;

				case 2:
					if (!true) {
						_context.next = 7;
						break;
					}

					_context.next = 5;
					return;

				case 5:
					_context.next = 2;
					break;

				case 7:
					_context.prev = 7;

					closed = true;
					return _context.finish(7);

				case 10:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this, [[0,, 7, 10]]);
}
var foo = g();
foo.next();
var result = foo.return('ok');

assert(result.done && result.value === 'ok' && closed);

result = foo.next();

assert(result.done && result.value === undefined);

result = regeneratorRuntime.mark(function _callee() {
	return regeneratorRuntime.wrap(function _callee$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
				case 'end':
					return _context2.stop();
			}
		}
	}, _callee, this);
})().return('ok2');

assert(result.done && result.value === 'ok2');
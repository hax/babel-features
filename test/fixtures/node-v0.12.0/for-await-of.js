"use strict";

var _asyncGenerator = function () { function AwaitValue(value) { this.value = value; } function AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; if (value instanceof AwaitValue) { Promise.resolve(value.value).then(function (arg) { resume("next", arg); }, function (arg) { resume("throw", arg); }); } else { settle(result.done ? "return" : "normal", result.value); } } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen.return !== "function") { this.return = undefined; } } if (typeof Symbol === "function" && Symbol.asyncIterator) { AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; } AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); }; AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); }; AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); }; return { wrap: function wrap(fn) { return function () { return new AsyncGenerator(fn.apply(this, arguments)); }; }, await: function await(value) { return new AwaitValue(value); } }; }();

var foo = function () {
	var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
		var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, x;

		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_iteratorNormalCompletion = true;
						_didIteratorError = false;
						_iteratorError = undefined;
						_context.prev = 3;
						_iterator = _asyncIterator(y);

					case 5:
						_context.next = 7;
						return _iterator.next();

					case 7:
						_step = _context.sent;
						_iteratorNormalCompletion = _step.done;
						_context.next = 11;
						return _step.value;

					case 11:
						_value = _context.sent;

						if (_iteratorNormalCompletion) {
							_context.next = 17;
							break;
						}

						x = _value;

					case 14:
						_iteratorNormalCompletion = true;
						_context.next = 5;
						break;

					case 17:
						_context.next = 23;
						break;

					case 19:
						_context.prev = 19;
						_context.t0 = _context["catch"](3);
						_didIteratorError = true;
						_iteratorError = _context.t0;

					case 23:
						_context.prev = 23;
						_context.prev = 24;

						if (!(!_iteratorNormalCompletion && _iterator.return)) {
							_context.next = 28;
							break;
						}

						_context.next = 28;
						return _iterator.return();

					case 28:
						_context.prev = 28;

						if (!_didIteratorError) {
							_context.next = 31;
							break;
						}

						throw _iteratorError;

					case 31:
						return _context.finish(28);

					case 32:
						return _context.finish(23);

					case 33:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, this, [[3, 19, 23, 33], [24,, 28, 32]]);
	}));

	return function foo() {
		return _ref.apply(this, arguments);
	};
}();

var bar = function () {
	var _ref2 = _asyncGenerator.wrap(regeneratorRuntime.mark(function _callee2() {
		var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _value2, x;

		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_iteratorNormalCompletion2 = true;
						_didIteratorError2 = false;
						_iteratorError2 = undefined;
						_context2.prev = 3;
						_iterator2 = _asyncIterator(y);

					case 5:
						_context2.next = 7;
						return _asyncGenerator.await(_iterator2.next());

					case 7:
						_step2 = _context2.sent;
						_iteratorNormalCompletion2 = _step2.done;
						_context2.next = 11;
						return _asyncGenerator.await(_step2.value);

					case 11:
						_value2 = _context2.sent;

						if (_iteratorNormalCompletion2) {
							_context2.next = 17;
							break;
						}

						x = _value2;

					case 14:
						_iteratorNormalCompletion2 = true;
						_context2.next = 5;
						break;

					case 17:
						_context2.next = 23;
						break;

					case 19:
						_context2.prev = 19;
						_context2.t0 = _context2["catch"](3);
						_didIteratorError2 = true;
						_iteratorError2 = _context2.t0;

					case 23:
						_context2.prev = 23;
						_context2.prev = 24;

						if (!(!_iteratorNormalCompletion2 && _iterator2.return)) {
							_context2.next = 28;
							break;
						}

						_context2.next = 28;
						return _asyncGenerator.await(_iterator2.return());

					case 28:
						_context2.prev = 28;

						if (!_didIteratorError2) {
							_context2.next = 31;
							break;
						}

						throw _iteratorError2;

					case 31:
						return _context2.finish(28);

					case 32:
						return _context2.finish(23);

					case 33:
					case "end":
						return _context2.stop();
				}
			}
		}, _callee2, this, [[3, 19, 23, 33], [24,, 28, 32]]);
	}));

	return function bar() {
		return _ref2.apply(this, arguments);
	};
}();

function _asyncIterator(iterable) { if (typeof Symbol === "function") { if (Symbol.asyncIterator) { var method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { return iterable[Symbol.iterator](); } } throw new TypeError("Object is not async iterable"); }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

assert(true);
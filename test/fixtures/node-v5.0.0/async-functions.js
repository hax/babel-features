'use strict';

var foo = (() => {
	var _ref = _asyncToGenerator(function* () {
		try {
			return yield 1;
		} catch (e) {
			if (e instanceof _GeneratorPrototype._Return) return e.value;
		}
	});

	return function foo() {
		return _ref.apply(this, arguments);
	};
})();

var _GeneratorPrototype = Object.getPrototypeOf(function* () {}.prototype);

if (!_GeneratorPrototype.return) {
	_GeneratorPrototype._Return = class Return {
		constructor(value) {
			this.value = value;
		}

	};

	_GeneratorPrototype.return = function (value) {
		var r = new this._Return(value);

		try {
			return this.throw(r);
		} catch (e) {
			return {
				done: true,
				value: value
			};
		}
	};
}

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var p = foo();

assert(typeof p.then === 'function');
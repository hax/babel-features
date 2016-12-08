'use strict';

var foo = function foo() {};

assert(foo.name === 'foo');

var obj = { bar: function bar() {} };

assert(obj.bar.name === 'bar');
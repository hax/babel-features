void function(global) {
	'use strict'

	switch (moduleFormat()) {
		case 'systemjs':
			System.register([], function (_export) {
				return {
					execute: function () {
						_export("test", test)
						_export("options", options)
					}
				}
			})
			break
		case 'amd':
			define({test: test, options: options})
			break
		case 'commonjs':
			exports.test = test
			exports.options = options
			break
		default:
			global.BabelFeatures = {test: test, options: options}
	}

	var tests = [
	{
		"feature": "es3-member-expression-literals",
		"code": "var foo = {}\nfoo.if = true\n\nassert(\n\tfoo.if\n)\n"
	},
	{
		"feature": "es3-property-literals",
		"code": "var foo = {if: true}\n\nassert(\n\tfoo[\"if\"]\n)\n"
	},
	{
		"feature": "es5-property-mutators",
		"code": "var foo = {\n\tget bar() { return true }\n}\n\nassert(\n\tfoo.bar\n)\n"
	},
	{
		"feature": "es2015-arrow-functions",
		"code": "var foo = () => true\n\nassert(\n\tfoo()\n)\n"
	},
	{
		"feature": "es2015-block-scoped-functions",
		"code": "var outer = foo()\nfunction foo() { return 1 }\n\n{\n\tvar inner = foo()\n\tfunction foo() { return 0 }\n}\n\nassert(\n\tinner === 0 && outer === 1\n)\n"
	},
	{
		"feature": "es2015-block-scoping",
		"code": "let foo = 0, bar = 1\nfoo += bar\n{\n\tconst bar = 2\n\tfoo += bar\n}\n\nassert(\n\tfoo === 3\n)\n\nswitch (0) {\n\tdefault:\n\t\tconst bar = 3\n\t\tfoo += bar\n}\n\nassert(\n\tfoo === 6\n)\n"
	},
	{
		"feature": "es2015-classes",
		"code": "class A {\n\tfoo() { return false }\n}\nclass B extends A {\n\tbar() { return !super.foo() }\n}\n\nassert(\n\tnew B().bar()\n)\n"
	},
	{
		"feature": "es2015-computed-properties",
		"code": "var foo = {[\"b\" + \"ar\"]: true}\n\nassert(\n\tfoo.bar\n)\n"
	},
	{
		"feature": "es2015-constants",
		"code": "const foo = true\n\ntry {\n\tfoo = false\n} catch (e) {\n\tassert(\n\t\tfoo\n\t)\n}\n\nassert(\n\tfoo\n)\n"
	},
	{
		"feature": "es2015-destructuring",
		"code": "function foo({a, b: b1, c: [x, , y]}) {\n\treturn a === 1 && b1 === 2 && x === 3 && y === 5\n}\n\nassert(\n\tfoo({a: 1, b: 2, c: [3, 4, 5]})\n)\n"
	},
	{
		"feature": "es2015-duplicate-keys",
		"code": "var x = {a: 5, a: 6}\nassert(x.a === 6)\n\nvar y = {\n\tget a() { return 1 },\n\ta: 2,\n}\nassert(y.a === 2)\n"
	},
	{
		"feature": "es2015-for-of",
		"code": "var o = {}\no[Symbol.iterator] = function () {\n\tvar i = 0\n\treturn {\n\t\tnext: function () {\n\t\t\tif (i < 3) return {value: ++i}\n\t\t\treturn {done: true}\n\t\t}\n\t}\n}\nvar sum = 0\nfor (var x of o) {\n\tsum += x\n}\n\nassert(\n\tsum === 6\n)\n"
	},
	{
		"feature": "es2015-function-name",
		"code": "var foo = function () {}\n\nassert(\n\tfoo.name === 'foo'\n)\n\nvar obj = { bar: function () {} }\n\nassert(\n\tobj.bar.name === 'bar'\n)\n"
	},
	{
		"feature": "es2015-literals",
		"code": "assert(\n\t0b111 === 0o7\n)\n\nassert(\n\t'\\u{20bb7}' === '𠮷'\n)\n"
	},
	{
		"feature": "es2015-object-super",
		"code": "var a = { foo() { return 'f' } }\nvar b = { foo() { return super.foo() + 'oo' } }\nObject.setPrototypeOf(b, a)\n\nassert(\n\tb.foo() === 'foo'\n)\n"
	},
	{
		"feature": "es2015-parameters",
		"code": "function foo(x = true) {\n\treturn x\n}\n\nassert(\n\tfoo()\n)\n"
	},
	{
		"feature": "es2015-shorthand-properties",
		"code": "var foo = true\nvar bar = {foo}\n\nassert(\n\tbar.foo\n)\n"
	},
	{
		"feature": "es2015-spread",
		"code": "function foo(a, b, c) {\n\treturn a + b === c\n}\nvar list = [2, 3]\n\nassert(\n\tfoo(1, ...list)\n)\n"
	},
	{
		"feature": "es2015-sticky-regex",
		"code": "// NOTE: Up to now, there is no runtime polyfill/shim available for sticky,\n//       So this test never pass even with babel plugin applied.\n\nassert(\n\t/o+/y.sticky\n)\n"
	},
	{
		"feature": "es2015-template-literals",
		"code": "var foo = \"foo\"\nvar bar = `${foo}bar`\n\nassert(\n\tbar === \"foobar\"\n)\n"
	},
	{
		"feature": "es2015-typeof-symbol",
		"code": "assert(\n\ttypeof Symbol() === 'symbol'\n)\n"
	},
	{
		"feature": "es2015-unicode-regex",
		"code": "var re = /^.$/u\n\nassert(\n\tre.test(\"𠮷\")\n)\n"
	},
	{
		"feature": "exponentiation-operator",
		"code": "assert(\n\t2 ** 10 === 1024\n)\n"
	},
	{
		"feature": "trailing-function-commas",
		"code": "function foo(a, b,) { return a + b }\n\nassert(\n\tfoo(1, 2,) === 3\n)\n"
	},
	{
		"feature": "es3-function-scope",
		"code": "var foo = function $babel_features_es3_function_scope$() {}\n\nassert(\n\ttypeof $babel_features_es3_function_scope$ === \"undefined\"\n)\n"
	},
	{
		"feature": "es2015-generators",
		"code": "function* g() {\n\tyield 1\n\tyield 2\n\tyield 3\n}\nvar foo = g()\n\nassert(\n\tfoo.next().value === 1\n)\nassert(\n\tfoo.next().value === 2\n)\nassert(\n\tfoo.next().value === 3\n)\nassert(\n\tfoo.next().done\n)\n\nvar result = function* () { return 1 }().next()\n\nassert(\n\tresult.done && result.value === 1\n)\n"
	},
	{
		"feature": "es2015-generator-return",
		"code": "var closed\nfunction* g() {\n\ttry {\n\t\tclosed = false\n\t\twhile (true) yield\n\t} finally {\n\t\tclosed = true\n\t}\n}\nvar foo = g()\nfoo.next()\nvar result = foo.return('ok')\n\nassert(\n\tresult.done && result.value === 'ok' && closed\n)\n\nresult = foo.next()\n\nassert(\n\tresult.done && result.value === undefined\n)\n\nresult = function* () {}().return('ok2')\n\nassert(\n\tresult.done && result.value === 'ok2'\n)\n"
	},
	{
		"feature": "async-functions",
		"code": "async function foo(x) {\n\treturn await x\n}\n\nvar called = false\nvar p = foo({\n\tthen: function () {\n\t\tcalled = true\n\t\tthrow 'test async functions'\n\t}\n})\n\nassert(typeof p.then === 'function')\nassert(called)\n"
	},
	{
		"feature": "async-generators",
		"code": "async function* foo(x) {\n\treturn await x\n}\n"
	},
	{
		"feature": "function-sent",
		"code": "function* g() {\n\tassert(function.sent === 1)\n\tyield\n\tassert(function.sent === 2)\n\tvar x = yield\n\tassert(function.sent === x)\n}\n\nvar test = g()\ntest.next(1)\ntest.next(2)\ntest.next(Math.random())\n"
	},
	{
		"feature": "object-rest-spread",
		"code": "var {x, y, ...z} = {x: 1, y: 2, a: 3, b: 4}\nassert(Object.keys(z).length === 2 && z.a === 3 && z.b === 4)\n\nvar o = {x, y, ...z}\nassert(Object.keys(o).length === 4 && o.a === 3 && o.b === 4)\n"
	}
]

function test() {
	var result = {}
	for (var i = 0; i < tests.length; ++i) {
		var name = tests[i].feature
		var code = tests[i].code
		result[name] = testFeature(code) || testFeature(code, true)
	}
	return result
}

function testFeature(code, strict) {
	if (strict) code = '"use strict";' + code
	try {
		var r
		new Function('assert', code)(function assert(test) {
			if (r === false) return
			r = !!test
		})
		if (r === undefined) throw new Error('no assert for ' + f)
		if (r) return strict ? 'strict' : true
	} catch (e) {}
	return false
}


var enumerable = {}.propertyIsEnumerable
var PREFIX = 'transform-'

function options(opts) {
	if (opts === undefined) opts = {}
	var strict = opts.strict === undefined ? true : !!opts.strict
	var modules = opts.modules === undefined ? true : !!opts.modules

	var plugins = []
	var testResult = test()
	var regeneratorOptions = {generators: false, async: false, asyncGenerators: false}
	for (var f in testResult) {
		if (!enumerable.call(testResult, f)) continue
		if (testResult[f] === true) continue
		if (testResult[f] === 'strict' && strict) continue
		switch (f) {
			case 'es2015-constants':
				plugins.push('check-' + f)
				break
			case 'trailing-function-commas':
			case 'function-sent':
				plugins.push('syntax-' + f)
				break
			case 'object-rest-spread':
				plugins.push(PREFIX + f)
				// currently transform-object-rest-spread only enable syntax,
				// need destructuring transform,
				// also need parameters transform for destructuring function parameters
				if (testResult['es2015-destructuring']) {
					plugins.push(	PREFIX + 'es2015-destructuring',
						PREFIX + 'es2015-parameters')
				}
				break
			case 'es3-function-scope':
				plugins.push('jscript')
				break
			case 'es2015-generators':
				regeneratorOptions.generators = true
				break
			case 'es2015-generator-return':
				if (testResult['es2015-generators']) plugins.push(PREFIX + f)
				break
			case 'async-functions':
				plugins.push('syntax-' + f)
				regeneratorOptions.async = true
				break
			case 'async-generators':
				plugins.push('syntax-' + f)
				regeneratorOptions.asyncGenerators = true
				break
			default:
				plugins.push(PREFIX + f)
		}
	}
	plugins.push([PREFIX + 'regenerator', regeneratorOptions])

	if (modules) {
		var m = PREFIX + 'es2015-modules-' + moduleFormat()
		if (strict) plugins.push(m)
		else plugins.push([m, {strict: false}])
	} else if (strict) {
		plugins.push(PREFIX + 'strict-mode')
	}

	return {plugins: plugins}
}

function moduleFormat() {
	if (typeof System === 'function' && typeof System.register === 'function') return 'systemjs'
	if (typeof define === 'function' && define.amd) return 'amd'
	if (typeof require === 'function' && typeof exports === 'object') return 'commonjs'
	return 'umd'
}

}(this)

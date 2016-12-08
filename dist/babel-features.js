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
		"code": "let foo = 0, bar = 1\nfoo += bar\n{\n\tconst bar = 2\n\tfoo += bar\n\tfor (let bar = 3; bar < 5; foo += bar, ++bar) {\n\t\tlet bar = 10\n\t\tfoo += bar\n\t}\n}\n\nassert(\n\tfoo === 30\n)\n\nswitch (0) {\n\tdefault:\n\t\tconst bar = 3\n\t\tfoo += bar\n}\n\nassert(\n\tfoo === 33\n)\n\nconst f = []\nfor (let i = 0; i < 3; ++i) {\n\tf.push(function () { return i })\n}\n\nassert(\n\tf.length === 3\n\t&& f[0]() === 0\n\t&& f[1]() === 1\n\t&& f[2]() === 2\n)"
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
		"feature": "es2015-destructuring",
		"code": "function foo({a, b: b1, c: [x, , y]}) {\n\treturn a === 1 && b1 === 2 && x === 3 && y === 5\n}\n\nassert(\n\tfoo({a: 1, b: 2, c: [3, 4, 5]})\n)\n"
	},
	{
		"feature": "es2015-duplicate-keys",
		"code": "var x = {a: 5, a: 6}\nassert(\n\tx.a === 6\n)\n\nvar y = {\n\tget a() { return 1 },\n\ta: 2,\n}\nassert(\n\ty.a === 2\n)\n"
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
		"feature": "es2015-iterator-close",
		"code": "function test() {\n\tvar iterable = {}\n\tvar count = 0\n\titerable[Symbol.iterator] = function () {\n\t\treturn {\n\t\t\tnext: function () {\n\t\t\t\tif (count < 3) return {value: ++count}\n\t\t\t\telse return {done: true}\n\t\t\t},\n\t\t\treturn: function () {\n\t\t\t\titerable.closed = true\n\t\t\t}\n\t\t}\n\t}\n\treturn iterable\n}\n\nvar iterable1 = test()\nfor (var x of iterable1) break\nassert(\n\titerable1.closed\n)\n\nvar iterable2 = test()\nvar [a] = iterable2\nassert(\n\titerable2.closed\n)\n"
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
		"code": "async function foo() {\n\treturn await 1\n}\n\nvar p = foo()\n\nassert(\n\ttypeof p.then === 'function'\n)\n"
	},
	{
		"feature": "async-generator-functions",
		"code": "async function* foo() {\n\tawait 1\n\tyield 2\n\treturn 3\n}\n\nvar g = foo()\nvar p = g.next()\n\nassert(\n\ttypeof p.then === 'function'\n)\n"
	},
	{
		"feature": "for-await-of",
		"code": "async function foo() {\n\tfor await (const x of y) {}\n}\n\nasync function* bar() {\n\tfor await (const x of y) {}\n}\n\nassert(\n\ttrue\n)\n"
	},
	{
		"feature": "object-rest-spread",
		"code": "var {x, y, ...z} = {x: 1, y: 2, a: 3, b: 4}\nassert(\n\tObject.keys(z).length === 2 && z.a === 3 && z.b === 4\n)\n\nvar o = {x, y, ...z}\nassert(\n\tObject.keys(o).length === 4 && o.a === 3 && o.b === 4\n)\n"
	},
	{
		"feature": "function-sent",
		"code": "function* g() {\n\tassert(\n\t\tfunction.sent === 1\n\t)\n\tyield\n\tassert(\n\t\tfunction.sent === 2\n\t)\n\tvar x = yield\n\tassert(\n\t\tfunction.sent === x\n\t)\n}\n\nvar test = g()\ntest.next(1)\ntest.next(2)\ntest.next(Math.random())\n"
	}
]

function test() {
	var result = {}
	for (var i = 0; i < tests.length; ++i) {
		var name = tests[i].feature
		var code = tests[i].code
		result[name] = testFeature(name, code) || testFeature(name, code, true)
	}
	return result
}

function testFeature(f, code, strict) {
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
	var module	= opts.module	=== undefined ? true : !!opts.module
	var strict	= opts.strict	=== undefined ? true : !!opts.strict
	var checkConst	= opts.checkConst	=== undefined ? true : !!opts.checkConst
	var iteratorClose	= opts.iteratorClose	=== undefined ? true : !!opts.iteratorClose
	var asyncFunctions	= opts.asyncFunctions	=== undefined ? true : !!opts.asyncFunctions
	var asyncGenerators	= opts.asyncGenerators	=== undefined ? true : !!opts.asyncGenerators
	var forAwaitOf	= opts.forAwaitOf	=== undefined ? true : !!opts.forAwaitOf
	var objectRestSpread	= opts.objectRestSpread	=== undefined ? true : !!opts.objectRestSpread
	var functionSent	= opts.functionSent === undefined ? true : !!opts.functionSent

	var plugins = checkConst ? ['check-es2015-constants'] : []

	// whether need regenerator transform
	var needRegenerator = false
	// options of regenerator plugin
	var regenOpts = {generators: true, async: false, asyncGenerators: false}
	// plugins for regenerator
	var regen = [['transform-regenerator', regenOpts]]
	// alterntaive plugins to regenerator
	var alt = []

	var testResult = test()
	for (var f in testResult) {
		if (!enumerable.call(testResult, f)) continue
		if (testResult[f] === true) continue
		if (testResult[f] === 'strict' && strict) continue
		switch (f) {
			case 'trailing-function-commas':
				plugins.push('syntax-' + f) // no need since babylon 6.9.1
				break
			case 'object-rest-spread':
				if (objectRestSpread) {
					plugins.push(PREFIX + f)
					// currently transform-object-rest-spread only enable syntax,
					// need destructuring transform
					plugins.push(PREFIX + 'es2015-destructuring')
					// also need parameters transform for destructuring function parameters
					plugins.push(PREFIX + 'es2015-parameters')
				}
				break
			case 'es2015-iterator-close':
				if (iteratorClose) {
					plugins.push(PREFIX + 'es2015-for-of')
					plugins.push(PREFIX + 'es2015-destructuring')
					// also need parameters transform for destructuring function parameters
					plugins.push(PREFIX + 'es2015-parameters')
				}
				break
			case 'es3-function-scope':
				plugins.push('jscript')
				break
			case 'es2015-generators':
				needRegenerator = true
				regenOpts.generators = true
				break
			case 'es2015-generator-return':
				regenOpts.generators = true
				alt.push(PREFIX + f)
				break
			case 'function-sent':
				if (functionSent) {
					regen.push('syntax-' + f)
					alt.push(PREFIX + f)
				}
				break
			case 'async-functions':
				if (asyncFunctions) {
					var target
					if (!forAwaitOf) { // regenerator not support for await statement
						target = alt
						regenOpts.async = true
						regen.push('syntax-' + f) // no need since babylon 6.9.1
					} else {
						target = plugins
					}
					if (typeof asyncFunctions === 'object') {
						target.push(['transform-async-to-module-method', asyncFunctions])
					} else {
						target.push('transform-async-to-generator')
					}
				}
				break
			case 'async-generator-functions':
				if (asyncGenerators) {
					if (!forAwaitOf) { // regenerator not support for await statement
						target = alt
						regenOpts.asyncGenerators = true
						regen.push('syntax-async-generators')
					} else {
						target = plugins
					}
					target.push(PREFIX + f)
				}
				break
			case 'for-await-of':
				if (forAwaitOf) {
					plugins.push('transform-async-to-generator', 'transform-async-generator-functions')
				}
				break
			default:
				plugins.push(PREFIX + f)
		}
	}

	if (module) {
		var m = PREFIX + 'es2015-modules-' + moduleFormat()
		if (strict) plugins.push(m)
		else plugins.push([m, {strict: false}])
	} else if (strict) {
		plugins.push(PREFIX + 'strict-mode')
	}

	if (needRegenerator) {
		plugins.push.apply(plugins, regen)
	} else {
		plugins.push.apply(plugins, alt)
	}

	var distinctPlugins = [], flags = {}
	for (var i = 0; i < plugins.length; ++i) {
		var p = plugins[i]
		if (!flags[p]) {
			flags[p] = true
			distinctPlugins.push(p)
		}
	}
	return {plugins: distinctPlugins}
}

function moduleFormat() {
	if (typeof System === 'function' && typeof System.register === 'function') return 'systemjs'
	if (typeof define === 'function' && define.amd) return 'amd'
	if (typeof require === 'function' && typeof exports === 'object') return 'commonjs'
	return 'umd'
}

}(this)

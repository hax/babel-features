'use strict'



var tests = require('./tests')

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

exports.test = test
exports.options = options

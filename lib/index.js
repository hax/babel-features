'use strict'


var tests = require('./load-tests')()

/* BEGIN */

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

/* END */

exports.test = test
exports.options = options
exports.reloadTests = function (path) {
	tests = require('./load-tests')(path)
}

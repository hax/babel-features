'use strict'

require('babel-polyfill')
var assert = require('assert')
var my = require('../lib')

var dir = 'fixtures/node-' + process.version

exports.test = test
function test() {
	my.reloadTests(__dirname + '/' + dir)
	var missing = my.options().plugins.filter(function (plugin) {
		return plugin !== 'check-es2015-constants'
			&& !plugin.startsWith('transform-es2015-modules-')
			&& plugin !== 'transform-es2015-sticky-regex' // no polyfill available
	})
	assert(missing.length === 0)
}

var babel = require('babel-core')
var options = my.options()
options.parserOpts = {plugins: '*'}
var fs = require('fs')

function compileAll(srcDir, outDir, callback) {
	var jsFiles = fs.readdirSync(srcDir).filter(function (filename) { return filename.endsWith('.js') })
	var options = JSON.parse(fs.readFileSync(outDir + '/.babelrc', 'utf-8'))
	var count = jsFiles.length
	jsFiles.forEach(function (filename) {
		var f = srcDir + '/' + filename
		babel.transformFile(f, options, function (err, result) {
			console.log('compile', f)
			if (err) throw err
			fs.writeFile(outDir + '/' + filename, result.code, done)
		})
	})
	function done(err) {
		if (err) throw err
		--count
		if (count === 0) callback()
	}
}

exports.generateFixture = generateFixture
function generateFixture() {
	require('mkdirp').sync(__dirname + '/' + dir)
	fs.writeFileSync(__dirname + '/' + dir + '/.babelrc', JSON.stringify(options, null, '\t'))
	fs.writeFileSync(__dirname + '/' + dir + '/features.json', JSON.stringify(my.test(), null, '\t'))
	compileAll(__dirname + '/../features', __dirname + '/' + dir, test)
}

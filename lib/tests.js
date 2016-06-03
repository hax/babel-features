'use strict'

var fs = require('fs')
var yaml = require('js-yaml')

module.exports = function tests(base) {
	if (base === undefined) base = __dirname + '/../features'
	return yaml.safeLoad(
		fs.readFileSync(__dirname + '/../features.yaml', 'utf-8')
	).map(function (f) {
		return {
			feature: f,
			code: fs.readFileSync(base + '/' + f + '.js', 'utf-8')
		}
	})
}

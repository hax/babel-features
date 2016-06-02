const {readFileSync, writeFileSync} = require('fs')

const tests = require('./lib/tests')

const tpl = readFileSync(__dirname + '/dist-template.js', 'utf-8')
const code = readFileSync(__dirname + '/lib/index.js', 'utf-8')

let body = 'var tests = ' + JSON.stringify(tests, undefined, '\t')
body += /\/\*\s*BEGIN\s*\*\/([\S\s]*)\/\*\s*END\s*\*\//.exec(code)[1]
const result = tpl.replace(/\/\*\s*BODY\s*\*\//, body.trim())

writeFileSync('./dist/babel-features.js', result)

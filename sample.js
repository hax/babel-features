'use strict'

var f = require('./lib')
console.log('Node.js:', process.versions.node)
console.log('V8:', process.versions.v8)
console.log()

console.log('babel features test result:')
console.log(f.test())
console.log()

console.log('recommended plugins:')
var plugins = f.options().plugins
console.log(plugins)
console.log()

console.log('recommended plugins (without stage 2 features):')
console.log(f.options({functionSent: false}).plugins)
console.log()

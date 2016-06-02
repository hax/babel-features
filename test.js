'use strict'

var f = require('./')
console.log('Node.js:', process.versions.node)
console.log('V8:', process.versions.v8)
console.log()

console.log('babel features test result:')
console.log(f.test())
console.log()

console.log('recommended plugins:')
console.log(f.options().plugins)
console.log()

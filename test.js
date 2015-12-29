'use strict'

var f = require('./')
console.log('Node.js:', process.versions.node)
console.log('V8:', process.versions.v8)
console.log(f.test())
console.log(f.options())

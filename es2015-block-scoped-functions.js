{
	var inner = foo()
	function foo() { return 0 }
}
var outer = foo()
function foo() { return 1 }

assert(
	inner === 0 && outer === 1
)

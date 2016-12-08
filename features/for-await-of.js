async function foo() {
	for await (const x of y) {}
}

async function* bar() {
	for await (const x of y) {}
}

assert(
	true
)

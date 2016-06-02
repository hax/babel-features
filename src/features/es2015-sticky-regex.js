// NOTE: Up to now, there is no runtime polyfill/shim available for sticky,
//       So this test never pass even with babel plugin applied.

assert(
	/o+/y.sticky
)

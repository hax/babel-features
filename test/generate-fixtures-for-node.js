const {exec} = require('child_process')

exec('. $NVM_DIR/nvm.sh --no-use; nvm deactivate; nvm ls --no-colors', (err, stdout) => {
	if (err) throw err
	const versions = stdout
		.split(/\n/)
		.map(l => l.trim())
		.filter(l => l && /^v[0-9.]+ \*$/.test(l))
		.map(l => l.slice(0, -2))

	for (const v of versions) {
		exec('. $NVM_DIR/nvm.sh --no-use; nvm run ' + v + ` ${__dirname}/generate-fixture`, (err, stdout) => {
			if (err) console.error(err)
			console.log(stdout)
		})
	}
})
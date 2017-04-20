'use strict'
module.exports = err => {
	const notifier = require('node-notifier')
	console.error('\x1b[31m%s\x1b[0m', err)
	notifier.notify({
		title: 'ERROR!!!',
		message: err
	})
}
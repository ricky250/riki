module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
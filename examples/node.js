const fs = require('fs'),
	path = require('path'),
	{ setTheme, printHighlight } = require('../dist/node/term.js');

const lang = process.argv[2] ?? 'js';

setTheme('default').then(_ => {
	const code = fs.readFileSync(path.resolve(__dirname, `./languages/test.${lang}`));

	printHighlight(code, lang);
});
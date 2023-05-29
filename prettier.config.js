const options = {
	arrowParens: 'avoid',
	singleQuote: true,
	bracketSpacing: true,
	endOfLine: 'lf',
	semi: false,
	tabWidth: 2,
	trailingComma: 'none',
	plugins: [require('prettier-plugin-tailwindcss')]
};

module.exports = options;

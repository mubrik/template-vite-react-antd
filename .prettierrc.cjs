// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  bracketSpacing: false,
  bracketLine: true,
  trailingComma: 'all',
  printWidth: 120,
  singleQuote: true,
  tabWidth: 2,
  arrowParens: 'always',
  quoteProps: 'consistent',
  semi: true,
};

module.exports = config;

const rules = require('./rules/stylistic-issues');

/**
 * https://eslint.org/docs/rules/#stylistic-issues
 */
module.exports = {
    extends: [
        'eslint:recommended'
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es2020: true
    },
    rules
};

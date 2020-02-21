const rules = require('./rules/jsx-a11y');

/**
 * https://github.com/evcohen/eslint-plugin-jsx-a11y
 */
module.exports = {
    plugins: [
        'jsx-a11y'
    ],
    extends: [
        'plugin:jsx-a11y/recommended'
    ],
    rules
};





const rules = require('./rules/flowtype');

/**
 * https://github.com/gajus/eslint-plugin-flowtype
 */
module.exports = {
    plugins: [
        'flowtype'
    ],
    extends: [
        'plugin:flowtype/recommended'
    ],
    rules
};

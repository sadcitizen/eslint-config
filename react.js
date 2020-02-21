const rules = require('./rules/react');

/**
 * https://github.com/yannickcr/eslint-plugin-react
 */
module.exports = {
    plugins: [
        'react'
    ],
    extends: [
        'plugin:react/recommended'
    ],
    rules
};

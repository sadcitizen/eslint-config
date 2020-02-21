const rules = require('./rules/jest');

/**
 * https://github.com/jest-community/eslint-plugin-jest
 */
module.exports = {
    plugins: [
        'jest'
    ],
    extends: [
        'plugin:jest/recommended'
    ],
    rules
};

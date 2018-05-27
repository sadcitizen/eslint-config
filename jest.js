/**
 * https://github.com/jest-community/eslint-plugin-jest
 */
module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    env: {
        es6: true,
        jest: true,
        node: true
    },
    plugins: [
        'jest'
    ],
    extends: [
        './import.js'
    ],
    rules: {
        'jest/consistent-test-it': [ // have control over `test` and `it` usages
            'error',
            {
                fn: 'test',
                withinDescribe: 'test'
            }
        ],
        'jest/lowercase-name': 'warn' // enforce lowercase test names
    }
};

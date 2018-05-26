/**
 * https://github.com/yannickcr/eslint-plugin-react
 */
module.exports = {
    parser: 'babel-eslint',
    parseOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    extends: [
        './jsx-a11y.js'
    ],
    plugins: [
        'react'
    ],
    rules: {

    }
};

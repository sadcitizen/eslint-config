/**
 * https://github.com/evcohen/eslint-plugin-jsx-a11y
 */
module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true
    },
    plugins: [
        'jsx-a11y'
    ],
    rules: {
        'jsx-a11y/no-static-element-interactions': 'off'
    }
};

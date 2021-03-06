/**
 * https://eslint.org/docs/rules/
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
    rules: Object.assign({},
        require('./rules/best-practices'),
        require('./rules/ecmascript-6'),
        require('./rules/errors'),
        require('./rules/node'),
        require('./rules/variables')
    )
};

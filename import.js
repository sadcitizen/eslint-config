/**
 * https://github.com/benmosher/eslint-plugin-import
 */
module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    env: {
        es6: true
    },
    plugins: [
        'import'
    ],
    rules: {
        'import/default': 'error', // ensure a default export is present, given a default import
        'import/dynamic-import-chunkname': '',
        'import/export': 'error',
        'import/exports-last': '',
        'import/extensions': '',
        'import/first': 'error',
        'import/group-exports': '',
        'import/max-dependencies': '',
        'import/named': 'error', // ensure named imports correspond to a named export in the remote file
        'import/namespace': 'error',
        'import/newline-after-import': '',
        'import/no-absolute-path': '',
        'import/no-amd': '',
        'import/no-anonymous-default-export': '',
        'import/no-commonjs': '',
        'import/no-cycle': '',
        'import/no-default-export': 'off', // forbid default exports
        'import/no-deprecated': 'warn', // report imported names marked with `@deprecated` documentation tag
        'import/no-duplicates': 'error', // report repeated import of the same module in multiple places
        'import/no-dynamic-require': '',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true
            }
        ],
        'import/no-internal-modules': '',
        'import/no-mutable-exports': '',
        'import/no-named-as-default-member': 'warn', // report use of exported name as property of default export
        'import/no-named-as-default': '',
        'import/no-named-default': '',
        'import/no-namespace': '',
        'import/no-nodejs-modules': '',
        'import/no-relative-parent-imports': '',
        'import/no-restricted-paths': '',
        'import/no-self-import': '',
        'import/no-unassigned-import': '',
        'import/no-unresolved': 'error', // ensure imports point to a file/module that can be resolved
        'import/no-useless-path-segments': '',
        'import/no-webpack-loader-syntax': '',
        'import/order': '',
        'import/prefer-default-export': 'warn', // prefer a default export if module exports a single name
        'import/unambiguous': ''
    }
};

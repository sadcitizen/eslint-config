/**
 * https://github.com/benmosher/eslint-plugin-import
 */
module.exports = {
    'import/extensions': [ // ensure consistent use of file extension within the import path
        'error',
        {
            js: 'never',
            ignorePackages: true
        }
    ],
    'import/first': 'warn', // ensure all imports appear before other statements
    'import/newline-after-import': 'warn', // enforce a newline after import statements
    'import/no-absolute-path': 'error', // forbid import of modules using absolute paths
    'import/no-cycle': 'error', // forbid a module from importing a module with a dependency path back to itself
    'import/no-duplicates': 'error', // report repeated import of the same module in multiple places
    'import/no-dynamic-require': 'warn', // forbid `require()` calls with expressions
    'import/no-extraneous-dependencies': [ // forbid the use of extraneous packages
        'error',
        {
            devDependencies: true
        }
    ],
    'import/no-mutable-exports': 'error', // forbid the use of mutable exports with `var` or `let`.
    'import/no-named-as-default-member': 'warn', // report use of exported name as property of default export
    'import/no-named-as-default': 'warn', // report use of exported name as identifier of default export
    'import/no-self-import': 'error', // forbid a module from importing itself
    'import/no-useless-path-segments': 'warn', // prevent unnecessary path segments in import and require statements
    'import/no-webpack-loader-syntax': 'error', // forbid webpack loader syntax in imports
    'import/order': [ // enforce a convention in module import order
        'warn',
        {
            groups: [
                'builtin',
                [
                    'external',
                    'internal'
                ],
                'parent',
                [
                    'sibling',
                    'index'
                ]
            ]
        }
    ],
    'import/prefer-default-export': 'warn' // prefer a default export if module exports a single name
};

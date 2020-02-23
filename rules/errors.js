/**
 * https://eslint.org/docs/rules/#possible-errors
 */
module.exports = {
    'no-await-in-loop': 'error', // disallow `await` inside of loops
    'no-dupe-else-if': 'error', // disallow duplicate conditions in if-else-if chains
    'no-empty': [ // disallow empty block statements
        'error',
        {
            allowEmptyCatch: true
        }
    ],
    'no-extra-parens': [ // disallow unnecessary parentheses
        'error',
        'all',
        {
            nestedBinaryExpressions: false,
            ignoreJSX: 'multi-line'
        }
    ],
    'no-import-assign': 'error', // disallow assigning to imported bindings
    'no-prototype-builtins': 'warn', // disallow the use of `Object.prototypes` builtins directly
    'no-setter-return': 'error', // disallow returning values from setters
    'no-template-curly-in-string': 'warn', // disallow template literal placeholder syntax in regular strings
};

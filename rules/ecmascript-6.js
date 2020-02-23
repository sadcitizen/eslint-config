/**
 * https://eslint.org/docs/rules/#ecmascript-6
 */
module.exports = {
    'arrow-body-style': [ // enforces no braces where they can be omitted
        'warn',
        'as-needed'
    ],
    'arrow-parens': [ // allows omitting parens when there is only one argument
        'warn',
        'as-needed'
    ],
    'arrow-spacing': [ // require space before and after arrow function’s arrow
        'warn',
        {
            before: true,
            after: true
        }
    ],
    'generator-star-spacing': [ // enforce spacing around the * in generator functions
        'error',
        {
            before: false,
            after: true
        }
    ],
    'no-duplicate-imports': 'error', // disallow duplicate imports
    'no-useless-computed-key': 'warn', // disallow unnecessary computed property keys in object literals
    'no-useless-constructor': 'warn', // disallow unnecessary constructors
    'no-useless-rename': 'warn', // disallow renaming import, export, and destructured assignments to the same name
    'no-var': 'warn', // require `let` or `const` instead of `var`
    'object-shorthand': [ // require or disallow method and property shorthand syntax for object literals
        'warn',
        'always',
        {
            avoidQuotes: true,
            avoidExplicitReturnArrows: true
        }
    ],
    'prefer-arrow-callback': 'warn', // require using arrow functions for callbacks
    'prefer-const': 'error', // require `const` declarations for variables that are never reassigned after declared
    'prefer-destructuring': 'warn', // require destructuring from arrays and/or objects
    'prefer-rest-params': 'warn', // suggest using the rest parameters instead of `arguments`
    'prefer-spread': 'warn', // suggest using the spread operator instead of `apply()`
    'prefer-template': 'warn', // suggest using template literals instead of string concatenation
    'rest-spread-spacing': [ // enforce spacing between rest and spread operators and their expressions
        'error',
        'never'
    ],
    'symbol-description': 'warn', // require symbol descriptions
    'template-curly-spacing': [ // require or disallow spacing around embedded expressions of template strings
        'warn',
        'never'
    ],
    'yield-star-spacing': [ // disallow spacing before the `*` in `yield*` expressions
        'warn',
        'before'
    ]
};

/**
 * https://eslint.org/docs/rules/#best-practices
 */
module.exports = {
    'array-callback-return': 'error', // enforces return statements in callbacks of array’s methods
    'block-scoped-var': 'error', // enforce the use of variables within the scope they are defined
    'class-methods-use-this': 'warn', // enforce that class methods utilize `this`
    'consistent-return': 'error', // require `return` statements to always specify values
    'curly': 'error', // enforce consistent brace style for all control statements
    'default-case': 'error', // require default case in `switch` statements
    'dot-location': [ // enforce newline before and after dot
        'error',
        'property'
    ],
    'dot-notation': 'warn', // require dot notation whenever possible
    'eqeqeq': 'error', // require === and !==
    'guard-for-in': 'error', // require `for-in` loops to include an `if` statement
    'max-classes-per-file': 'error', // one class per file only
    'no-alert': 'warn', // disallow the use of `alert`, `prompt` and `confirm` functions
    'no-caller': 'error', // disallow the use of caller/callee
    'no-constructor-return': 'error', // disallow returning value from constructor
    'no-else-return': 'error', // disallow return before else
    'no-eq-null': 'error', // disallow null comparisons
    'no-eval': 'error', // disallow the use of `eval()`
    'no-extend-native': 'error', // disallow extending of native objects
    'no-floating-decimal': 'error', // disallow floating decimals
    'no-implicit-coercion': 'error', // disallow shorthand type conversions
    'no-implied-eval': 'error', // disallow the use of `eval()`-like methods
    // 'no-invalid-this': 'error', // disallow `this` keywords outside of classes or class-like objects
    'no-iterator': 'error', // disallow the use of the `__iterator__` property
    'no-labels': 'error', // disallow labeled statements
    'no-lone-blocks': 'error', // disallow unnecessary nested blocks
    'no-loop-func': 'error', // disallow function declarations and expressions inside loop statements
    // 'no-magic-numbers': [ // disallow magic numbers
    //     'warn',
    //     {
    //         ignore: [-1, 0, 1],
    //         ignoreArrayIndexes: true
    //     }
    // ],
    'no-multi-spaces': 'warn', // disallow multiple spaces
    'no-multi-str': 'error', // disallow multiline strings
    'no-new': 'error', // disallow `new` operators outside of assignments or comparisons
    'no-new-func': 'error', // disallow `new` operators with the `Function` object
    'no-new-wrappers': 'error', // disallow `new` operators with the `String`, `Number`, and `Boolean` objects
    'no-param-reassign': 'error', // disallow reassigning `function` parameters
    'no-proto': 'error', // disallow the use of the `__proto__` property
    'no-return-assign': 'error', // disallow assignment operators in `return` statements
    'no-return-await': 'error', // disallow unnecessary `return await`
    'no-script-url': 'error', // disallow `javascript:` urls
    'no-self-compare': 'error', // disallow comparisons where both sides are exactly the same
    'no-sequences': 'error', // disallow comma operators
    'no-throw-literal': 'error', // restrict what can be thrown as an exception
    'no-unused-expressions': 'error', // disallow unused expressions
    'no-useless-call': 'error', // disallow unnecessary calls to `.call()` and `.apply()`
    'no-useless-concat': 'error', // disallow unnecessary concatenation of literals or template literals
    'no-useless-return': 'error', // disallow redundant return statements
    'no-with': 'error', // disallow `with` statements
    'prefer-promise-reject-errors': 'error', // require using `Error` objects as `Promise` rejection reasons
    'prefer-regex-literals': 'error', // disallow use of the `RegExp` constructor in favor of regular expression literals
    'radix': 'error', // require radix parameter
    'require-await': 'error', // disallow async functions which have no `await` expression
    'wrap-iife': [ // require parentheses around immediate function invocations
        'error',
        'inside'
    ],
    'yoda': [ // disallow yoda conditions
        'error',
        'never',
        {
            exceptRange: true
        }
    ]
};

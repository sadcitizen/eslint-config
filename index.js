/**
 * https://eslint.org/docs/rules/
 */
module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    env: {
        browser: true,
        es6: true,
        node: true
    },
    rules: {
        'accessor-pairs': 'off', // require getter/setter pairs in objects
        'array-bracket-newline': [ // enforce line breaks after opening and before closing array brackets
            'error',
            {
                multiline: true
            }
        ],
        'array-bracket-spacing': [ // disallow spaces inside of brackets
            'error',
            'never'
        ],
        'array-callback-return': 'error', // enforces return statements in callbacks of array’s methods
        'array-element-newline': [ // enforce line breaks between array elements
            'error',
            {
                multiline: true
            }
        ],
        'arrow-body-style': [ // enforces no braces where they can be omitted
            'error',
            'as-needed'
        ],
        'arrow-parens': [ // allows omitting parens when there is only one argument
            'error',
            'as-needed'
        ],
        'arrow-spacing': [ // require space before and after arrow function’s arrow
            'error',
            {
                before: true,
                after: true
            }
        ],
        'block-scoped-var': 'error', // enforce the use of variables within the scope they are defined
        'block-spacing': [ // enforce spaces inside of blocks after opening block and before closing block
            'error',
            'always'
        ],
        'brace-style': [ // require brace style
            'error',
            '1tbs'
        ],
        'callback-return': 'off', // require return statements after callbacks
        camelcase: 'error', // require camelcase naming convention
        'capitalized-comments': 'off', // enforce or disallow capitalization of the first letter of a comment
        'class-methods-use-this': 'warn', // enforce that class methods utilize `this`
        'comma-dangle': [ // disallow trailing commas
            'error',
            'never'
        ],
        'comma-spacing': [ // require space after comma, disallow space before comma
            'error',
            {
                before: false,
                after: true
            }
        ],
        'comma-style': [ // require a comma after and on the same line as an array element, object property, or variable declaration
            'error',
            'last'
        ],
        complexity: 'off', // limit cyclomatic complexity
        'computed-property-spacing': [ // disallow spaces inside of computed properties
            'error',
            'never'
        ],
        'consistent-return': 'error', // require `return` statements to always specify values
        'consistent-this': [ // enforce consistent naming when capturing the current execution context
            'error',
            'that'
        ],
        'constructor-super': 'error', // verify calls of `super()` in constructors
        curly: 'error', // enforce consistent brace style for all control statements
        'default-case': 'off', // require default case in `switch` statements
        'dot-location': [ // enforce newline before and after dot
            'error',
            'property'
        ],
        'dot-notation': 'error', // require dot notation whenever possible
        'eol-last': [ // require newline at the end of files
            'error',
            'always'
        ],
        eqeqeq: 'error', // require === and !==
        'for-direction': 'error', // enforce `for` loop update clause moving the counter in the right direction
        'func-call-spacing': [ // disallow spacing between function identifiers and their invocations
            'error',
            'never'
        ],
        'func-name-matching': 'off', // require function names to match the name of the variable or property to which they are assigned
        'func-names': 'off', // require or disallow named `function` expressions
        'func-style': 'off', // enforce the consistent use of either `function` declarations or expressions
        'function-paren-newline': [ // enforce consistent line breaks inside function parentheses
            'error',
            'multiline'
        ],
        'generator-star-spacing': [ // enforce spacing around the * in generator functions
            'error',
            {
                before: false,
                after: true
            }
        ],
        'getter-return': 'error', // enforce `return` statements in getters
        'global-require': 'off', // enforce `require()` on the top-level module scope
        'guard-for-in': 'off', // require or disallow guarding `for-in`
        'handle-callback-err': 'off', // enforce callback error handling
        'id-blacklist': 'off', // disallow specified identifiers
        'id-length': 'off', // enforce minimum and maximum identifier lengths
        'id-match': 'off', // require identifiers to match a specified regular expression
        'implicit-arrow-linebreak': [ // enforce the location of arrow function bodies with implicit returns
            "error",
            "beside"
        ],
        indent: [ // require consistent indentation
            'error',
            4, // 4 spaces
            {
                ignoredNodes: [
                    'JSXElement *'
                ]
            }
        ],
        'indent-legacy': 'off', // deprecated, replaced by indent
        'init-declarations': 'off', // require or disallow initialization in variable declarations
        'jsx-quotes': [ // enforce the use of double quotes in JSX attributes
            'error',
            'prefer-double'
        ],
        'key-spacing': [ // enforce consistent spacing between keys and values in object literal properties
            'error',
            {
                beforeColon: false,
                afterColon: true
            }
        ],
        'keyword-spacing': [ // enforce consistent spacing before and after keywords
            'error',
            {
                before: true,
                after: true
            }
        ],
        'line-comment-position': 'off', // enforce position of line comments
        'linebreak-style': 'off', // enforce consistent linebreak style
        'lines-around-comment': 'off', // require empty lines around comments
        'lines-around-directive': 'off', // deprecated, replaced by padding-line-between-statements
        'lines-between-class-members': [ // require an empty line between class members
            'error',
            'always'
        ],
        'max-classes-per-file': 'error', // one class per file only
        'max-depth': 'off', // enforce a maximum depth that blocks can be nested
        'max-len': 'off', // enforce a maximum line length
        'max-lines': 'off', // enforce a maximum file length
        'max-nested-callbacks': 'off', // enforce a maximum depth that callbacks can be nested
        'max-params': 'off', // enforce or disallow a maximum number of parameters in function definitions
        'max-statements': 'off', // enforce a maximum number of statements allowed in function blocks
        'max-statements-per-line': 'off', // enforce a maximum number of statements allowed per line
        'multiline-comment-style': 'off', // enforce a particular style for multiline comments
        'multiline-ternary': 'off', // enforce or disallow newlines between operands of ternary expressions
        'new-cap': 'error', // require constructor names to begin with a capital letter
        'new-parens': 'error', // require parentheses when invoking a constructor with no arguments
        'newline-after-var': 'off', // deprecated, replaced by padding-line-between-statements
        'newline-before-return': 'off', // deprecated, replaced by padding-line-between-statements
        'newline-per-chained-call': 'off', // require a newline after each call in a method chain
        'no-alert': 'error', // disallow the use of `alert`, `prompt` and `confirm` functions
        'no-array-constructor': 'off', // disallow use of the `Array()` constructor
        'no-await-in-loop': 'warn', // disallow `await` inside of loops
        'no-bitwise': 'error', // disallow bitwise operators
        'no-buffer-constructor': 'off', // disallow use of the `Buffer()` constructor
        'no-caller': 'error', // disallow the use of caller/callee
        'no-case-declarations': 'error', // disallow lexical declarations in case/default clauses
        'no-catch-shadow': 'off', // disallow shadowing of variables inside of `catch`
        'no-class-assign': 'error', // disallow modifying variables of class declarations
        'no-compare-neg-zero': 'error', // disallow comparing against -0
        'no-cond-assign': 'error', // disallow assignment operators in conditional statements
        'no-confusing-arrow': 'off', // disallow arrow functions where they could be confused with comparisons
        'no-console': [ // disallow the use of `console`
            'error',
            {
                allow: [
                    'info' // allow the use `console.info()`
                ]
            }
        ],
        'no-const-assign': 'error', // disallow modifying variables that are declared using `const`
        'no-constant-condition': 'error', // disallow constant expressions in conditions
        'no-continue': 'off', // disallow `continue` statements
        'no-control-regex': 'error', // disallow control characters in regular expressions
        'no-debugger': 'error', // disallow the use of `debugger`
        'no-delete-var': 'error', // disallow deleting variables
        'no-div-regex': 'off', // disallow division operators explicitly at the beginning of regular expressions
        'no-dupe-args': 'error', // disallow duplicate arguments in function definitions
        'no-dupe-class-members': 'error', // disallow duplicate name in class members
        'no-dupe-keys': 'error', // disallow duplicate keys in object literals
        'no-duplicate-case': 'error', // disallow a duplicate case label
        'no-duplicate-imports': 'error', // disallow duplicate imports
        'no-else-return': 'error', // disallow return before else
        'no-empty': [ // disallow empty block statements
            'error',
            {
                allowEmptyCatch: true
            }
        ],
        'no-empty-character-class': 'error', // disallow empty character classes in regular expressions
        'no-empty-function': 'off', // disallow empty functions
        'no-empty-pattern': 'error', // disallow empty destructuring patterns
        'no-eq-null': 'error', // disallow null comparisons
        'no-eval': 'error', // disallow the use of `eval()`
        'no-ex-assign': 'error', // disallow reassigning exceptions in `catch` clauses
        'no-extend-native': 'error', // disallow extending of native objects
        'no-extra-bind': 'off', // disallow unnecessary function binding
        'no-extra-boolean-cast': 'error', // disallow unnecessary boolean casts
        'no-extra-label': 'off', // disallow unnecessary labels
        'no-extra-parens': [ // disallow unnecessary parentheses
            'error',
            'all',
            {
                nestedBinaryExpressions: false,
                ignoreJSX: 'multi-line'
            }
        ],
        'no-extra-semi': 'error', // disallow unnecessary semicolons
        'no-fallthrough': 'error', // disallow `case` statement fallthrough
        'no-floating-decimal': 'error', // disallow floating decimals
        'no-func-assign': 'error', // disallow reassigning `function` declarations
        'no-global-assign': 'error', // disallow assignment to native objects or read-only global variables
        'no-implicit-coercion': 'off', // disallow the type conversion with shorter notations
        'no-implicit-globals': 'off', // disallow variable and `function` declarations in the global scope
        'no-implied-eval': 'error', // disallow implied `eval()`
        'no-inline-comments': 'off', // disallow inline comments after code
        'no-inner-declarations': 'error', // disallow variable or `function` declarations in nested blocks
        'no-invalid-regexp': 'error', // disallow invalid regular expression strings in `RegExp` constructors
        'no-invalid-this': 'off', // disallow `this` keywords outside of classes or class-like objects
        'no-irregular-whitespace': 'error', // disallow irregular whitespace
        'no-iterator': 'off',
        'no-label-var': 'off',
        'no-labels': 'off',
        'no-lone-blocks': 'off',
        'no-lonely-if': 'off',
        'no-loop-func': 'off',
        'no-magic-numbers': [ // disallow magic numbers
            'warn',
            {
                ignoreArrayIndexes: true
            }
        ],
        'no-mixed-operators': 'off',
        'no-mixed-requires': 'off',
        'no-mixed-spaces-and-tabs': 'error', // disallow mixed spaces and tabs for indentation
        'no-multi-assign': 'off',
        'no-multi-spaces': 'off',
        'no-multi-str': 'off',
        'no-multiple-empty-lines': 'off',
        'no-native-reassign': 'off', // deprecated, replaced by no-global-assign
        'no-negated-condition': 'off',
        'no-negated-in-lhs': 'off', // deprecated, replaced by no-unsafe-negation
        'no-nested-ternary': 'warn', // disallow nested ternary expressions
        'no-new': 'off',
        'no-new-func': 'off',
        'no-new-object': 'off',
        'no-new-require': 'error', // disallow `new require()`
        'no-new-symbol': 'error', // disallow `Symbol` constructor
        'no-new-wrappers': 'off',
        'no-obj-calls': 'error', // disallow calling global object properties as functions
        'no-octal': 'error', // disallow octal literals
        'no-octal-escape': 'off',
        'no-param-reassign': 'off',
        'no-path-concat': 'off',
        'no-plusplus': 'off',
        'no-process-env': 'off', // disallow `process.env`
        'no-process-exit': 'off',
        'no-proto': 'off',
        'no-prototype-builtins': 'warn', // disallow the use of `Object.prototypes` builtins directly
        'no-redeclare': 'error', // disallow variable redeclaration
        'no-regex-spaces': 'error', // disallow multiple spaces in regular expression literals
        'no-restricted-globals': 'off',
        'no-restricted-imports': 'off',
        'no-restricted-modules': 'off',
        'no-restricted-properties': 'off',
        'no-restricted-syntax': 'off',
        'no-return-assign': 'off',
        'no-return-await': 'off',
        'no-script-url': 'off',
        'no-self-assign': 'error', // disallow self assignment
        'no-self-compare': 'off',
        'no-sequences': 'off',
        'no-shadow': 'off',
        'no-shadow-restricted-names': 'off',
        'no-spaced-func': 'off', // deprecated, replaced by func-call-spacing
        'no-sparse-arrays': 'error', // disallow sparse arrays
        'no-sync': 'off',
        'no-tabs': 'off', // disallow all tabs
        'no-template-curly-in-string': 'warn', // disallow template literal placeholder syntax in regular strings
        'no-ternary': 'off', // disallow ternary operators
        'no-this-before-super': 'error', // disallow use of `this`/`super` before calling `super()` in constructors
        'no-throw-literal': 'off',
        'no-trailing-spaces': 'warn', // disallow trailing whitespace at the end of lines
        'no-undef': 'error', // disallow undeclared variables
        'no-undef-init': 'off',
        'no-undefined': 'off',
        'no-underscore-dangle': 'error', // disallow dangling underscores in identifiers
        'no-unexpected-multiline': 'error', // disallow confusing multiline expressions
        'no-unmodified-loop-condition': 'off',
        'no-unneeded-ternary': 'warn', // disallow ternary operators when simpler alternatives exist
        'no-unreachable': 'error', // disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
        'no-unsafe-finally': 'error', // disallow control flow statements in `finally` blocks
        'no-unsafe-negation': 'error', // disallow negating the left operand of relational operators
        'no-unused-expressions': 'off',
        'no-unused-labels': 'error', // disallow unused labels
        'no-unused-vars': 'error', // disallow unused variables
        'no-use-before-define': 'error', // disallow early use
        'no-useless-call': 'off',
        'no-useless-computed-key': 'off',
        'no-useless-concat': 'off',
        'no-useless-constructor': 'off',
        'no-useless-escape': 'error', // disallow unnecessary escape usage
        'no-useless-rename': 'off',
        'no-useless-return': 'error', // disallow redundant return statements
        'no-var': 'off',
        'no-void': 'error', // disallow `void` operators
        'no-warning-comments': 'off',
        'no-whitespace-before-property': 'off',
        'no-with': 'error', // disallow `with` statements
        'nonblock-statement-body-position': 'off',
        'object-curly-newline': 'off',
        'object-curly-spacing': 'off',
        'object-property-newline': 'off',
        'object-shorthand': 'off',
        'one-var': 'off',
        'one-var-declaration-per-line': 'off',
        'operator-assignment': 'off',
        'operator-linebreak': [ // enforce consistent linebreak style for operators
            'error',
            'before'
        ],
        'padded-blocks': 'off',
        'padding-line-between-statements': 'off',
        'prefer-arrow-callback': 'off',
        'prefer-const': 'off',
        'prefer-destructuring': 'off',
        'prefer-numeric-literals': 'off',
        'prefer-object-spread': 'off',
        'prefer-promise-reject-errors': 'off',
        'prefer-reflect': 'off', // deprecated
        'prefer-rest-params': 'off',
        'prefer-spread': 'off',
        'prefer-template': 'off',
        'quote-props': 'off',
        quotes: 'off',
        radix: 'error', // require radix parameter
        'require-await': 'off',
        'require-jsdoc': 'off',
        'require-yield': 'error', // disallow generator functions that do not have `yield`
        'rest-spread-spacing': 'off',
        semi: [ // require semicolons instead of ASI
            'error',
            'always'
        ],
        'semi-spacing': 'off',
        'semi-style': 'off',
        'sort-imports': 'off',
        'sort-keys': 'off',
        'sort-vars': 'off',
        'space-before-blocks': 'off',
        'space-before-function-paren': 'off',
        'space-in-parens': 'off',
        'space-infix-ops': 'off',
        'space-unary-ops': 'off',
        'spaced-comment': 'off',
        strict: 'off', // disallow strict mode directives
        'switch-colon-spacing': 'off',
        'symbol-description': 'off',
        'template-curly-spacing': 'off',
        'template-tag-spacing': 'off',
        'unicode-bom': 'off',
        'use-isnan': 'error', // require calls to `isNaN()` when checking for `NaN`
        'valid-jsdoc': 'off', // enforce or disallow valid JSDoc comments
        'valid-typeof': 'error', // enforce comparing `typeof` expressions against valid strings
        'vars-on-top': 'off',
        'wrap-iife': 'off',
        'wrap-regex': 'off',
        'yield-star-spacing': 'off',
        yoda: [ // disallow yoda conditions
            'error',
            'never',
            {
                exceptRange: true
            }
        ]
    }
};

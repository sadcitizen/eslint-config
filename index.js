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
        node: true
    },
    rules: {
        'accessor-pairs': 'off', // require getter/setter pairs in objects
        'array-bracket-newline': 'off',
        'array-bracket-spacing': 'off',
        'array-callback-return': 'off',
        'array-element-newline': 'off',
        'arrow-body-style': 'off',
        'arrow-parens': 'off',
        'arrow-spacing': 'off',
        'block-scoped-var': 'off',
        'block-spacing': 'off',
        'brace-style': 'off',
        'callback-return': 'off',
        camelcase: 'error', // require camelcase naming convention
        'capitalized-comments': 'off',
        'class-methods-use-this': 'off',
        'comma-dangle': 'off',
        'comma-spacing': 'off',
        'comma-style': 'off',
        complexity: 'off',
        'computed-property-spacing': 'off',
        'consistent-return': 'off',
        'consistent-this': 'off',
        'constructor-super': 'error', // verify calls of `super()` in constructors
        curly: 'off',
        'default-case': 'off',
        'dot-location': 'off',
        'dot-notation': 'error', // require dot notation whenever possible
        'eol-last': 'off',
        eqeqeq: 'error', // require === and !==
        'for-direction': 'error', // enforce `for` loop update clause moving the counter in the right direction
        'func-call-spacing': 'off',
        'func-name-matching': 'off',
        'func-names': 'off',
        'func-style': 'off',
        'function-paren-newline': 'off',
        'generator-star-spacing': 'off',
        'getter-return': 'error', // enforce `return` statements in getters
        'global-require': 'off',
        'guard-for-in': 'off',
        'handle-callback-err': 'off',
        'id-blacklist': 'off', // disallow specified identifiers
        'id-length': 'off', // enforce minimum and maximum identifier lengths
        'id-match': 'off', // require identifiers to match a specified regular expression
        'implicit-arrow-linebreak': 'off',
        indent: [ // require consistent indentation
            'error',
            4 // 4 spaces
        ],
        'indent-legacy': 'off', // deprecated, replaced by indent
        'init-declarations': 'off',
        'jsx-quotes': [ // enforce the use of double quotes in JSX attributes
            'error',
            'prefer-double'
        ],
        'key-spacing': 'off',
        'keyword-spacing': 'off',
        'line-comment-position': 'off',
        'linebreak-style': 'off',
        'lines-around-comment': 'off',
        'lines-around-directive': 'off',
        'lines-between-class-members': 'off',
        'max-classes-per-file': 'off',
        'max-depth': 'off',
        'max-len': 'off',
        'max-lines': 'off',
        'max-nested-callbacks': 'off',
        'max-params': 'off',
        'max-statements': 'off',
        'max-statements-per-line': 'off',
        'multiline-comment-style': 'off',
        'multiline-ternary': 'off',
        'new-cap': 'off',
        'new-parens': 'off',
        'newline-after-var': 'off',
        'newline-before-return': 'off',
        'newline-per-chained-call': 'off',
        'no-alert': 'error', // disallow the use of `alert`, `prompt` and `confirm` functions
        'no-array-constructor': 'off',
        'no-await-in-loop': 'off',
        'no-bitwise': 'error', // disallow bitwise operators
        'no-buffer-constructor': 'off',
        'no-caller': 'off',
        'no-case-declarations': 'error',
        'no-catch-shadow': 'off',
        'no-class-assign': 'error', // disallow modifying variables of class declarations
        'no-compare-neg-zero': 'error', // disallow comparing against -0
        'no-cond-assign': 'error', // disallow assignment operators in conditional statements
        'no-confusing-arrow': 'off',
        'no-console': [ // disallow the use of `console`
            'error',
            {
                allow: [
                    'info' // allow the use `console.info()`
                ]
            }
        ],
        'no-const-assign': 'error',
        'no-constant-condition': 'error', // disallow constant expressions in conditions
        'no-continue': 'off',
        'no-control-regex': 'error',
        'no-debugger': 'error', // disallow the use of `debugger`
        'no-delete-var': 'error',
        'no-div-regex': 'off',
        'no-dupe-args': 'error', // disallow duplicate arguments in function definitions
        'no-dupe-class-members': 'error', // disallow duplicate name in class members
        'no-dupe-keys': 'error', // disallow duplicate keys in object literals
        'no-duplicate-case': 'error', // disallow a duplicate case label
        'no-duplicate-imports': 'error', // disallow duplicate imports
        'no-else-return': 'off',
        'no-empty': 'error', // disallow empty block statements
        'no-empty-character-class': 'error',
        'no-empty-function': 'off',
        'no-empty-pattern': 'error',
        'no-eq-null': 'off',
        'no-eval': 'error', // disallow the use of `eval()`
        'no-ex-assign': 'error',
        'no-extend-native': 'off',
        'no-extra-bind': 'off',
        'no-extra-boolean-cast': 'error', // disallow unnecessary boolean casts
        'no-extra-label': 'off',
        'no-extra-parens': 'off',
        'no-extra-semi': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'off',
        'no-func-assign': 'error',
        'no-global-assign': 'error',
        'no-implicit-coercion': 'off',
        'no-implicit-globals': 'off',
        'no-implied-eval': 'off',
        'no-inline-comments': 'off',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-invalid-this': 'off',
        'no-irregular-whitespace': 'error',
        'no-iterator': 'off',
        'no-label-var': 'off',
        'no-labels': 'off',
        'no-lone-blocks': 'off',
        'no-lonely-if': 'off',
        'no-loop-func': 'off',
        'no-magic-numbers': 'off',
        'no-mixed-operators': 'off',
        'no-mixed-requires': 'off',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'off',
        'no-multi-spaces': 'off',
        'no-multi-str': 'off',
        'no-multiple-empty-lines': 'off',
        'no-native-reassign': 'off',
        'no-negated-condition': 'off',
        'no-negated-in-lhs': 'off',
        'no-nested-ternary': 'warn', // disallow nested ternary expressions
        'no-new': 'off',
        'no-new-func': 'off',
        'no-new-object': 'off',
        'no-new-require': 'off',
        'no-new-symbol': 'error',
        'no-new-wrappers': 'off',
        'no-obj-calls': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'off',
        'no-param-reassign': 'off',
        'no-path-concat': 'off',
        'no-plusplus': 'off',
        'no-process-env': 'off',
        'no-process-exit': 'off',
        'no-proto': 'off',
        'no-prototype-builtins': 'off',
        'no-redeclare': 'error',
        'no-regex-spaces': 'error',
        'no-restricted-globals': 'off',
        'no-restricted-imports': 'off',
        'no-restricted-modules': 'off',
        'no-restricted-properties': 'off',
        'no-restricted-syntax': 'off',
        'no-return-assign': 'off',
        'no-return-await': 'off',
        'no-script-url': 'off',
        'no-self-assign': 'error',
        'no-self-compare': 'off',
        'no-sequences': 'off',
        'no-shadow': 'off',
        'no-shadow-restricted-names': 'off',
        'no-spaced-func': 'off',
        'no-sparse-arrays': 'error',
        'no-sync': 'off',
        'no-tabs': 'off', // disallow all tabs
        'no-template-curly-in-string': 'off',
        'no-ternary': 'off', // disallow ternary operators
        'no-this-before-super': 'error',
        'no-throw-literal': 'off',
        'no-trailing-spaces': 'warn', // disallow trailing whitespace at the end of lines
        'no-undef': 'error',
        'no-undef-init': 'off',
        'no-undefined': 'off',
        'no-underscore-dangle': 'error', // disallow dangling underscores in identifiers
        'no-unexpected-multiline': 'error',
        'no-unmodified-loop-condition': 'off',
        'no-unneeded-ternary': 'warn', // disallow ternary operators when simpler alternatives exist
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'no-unused-expressions': 'off',
        'no-unused-labels': 'error',
        'no-unused-vars': 'error',
        'no-use-before-define': 'off',
        'no-useless-call': 'off',
        'no-useless-computed-key': 'off',
        'no-useless-concat': 'off',
        'no-useless-constructor': 'off',
        'no-useless-escape': 'error',
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
        'operator-linebreak': 'off',
        'padded-blocks': 'off',
        'padding-line-between-statements': 'off',
        'prefer-arrow-callback': 'off',
        'prefer-const': 'off',
        'prefer-destructuring': 'off',
        'prefer-numeric-literals': 'off',
        'prefer-object-spread': 'off',
        'prefer-promise-reject-errors': 'off',
        'prefer-reflect': 'off',
        'prefer-rest-params': 'off',
        'prefer-spread': 'off',
        'prefer-template': 'off',
        'quote-props': 'off',
        quotes: 'off',
        radix: 'off',
        'require-await': 'off',
        'require-jsdoc': 'off',
        'require-yield': 'error',
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
        strict: 'off',
        'switch-colon-spacing': 'off',
        'symbol-description': 'off',
        'template-curly-spacing': 'off',
        'template-tag-spacing': 'off',
        'unicode-bom': 'off',
        'use-isnan': 'error',
        'valid-jsdoc': 'off',
        'valid-typeof': 'error',
        'vars-on-top': 'off',
        'wrap-iife': 'off',
        'wrap-regex': 'off',
        'yield-star-spacing': 'off',
        yoda: 'off'
    }
};

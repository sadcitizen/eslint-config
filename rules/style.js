/**
 * https://eslint.org/docs/rules/#stylistic-issues
 */
module.exports = {
    'array-bracket-newline': [ // enforce line breaks after opening and before closing array brackets
        'warn',
        'consistent'
    ],
    'array-bracket-spacing': [ // disallow spaces inside of brackets
        'warn',
        'never'
    ],
    'array-element-newline': [ // enforce line breaks between array elements
        'warn',
        'consistent'
    ],
    'block-spacing': [ // enforce spaces inside of blocks after opening block and before closing block
        'warn',
        'always'
    ],
    'brace-style': [ // require brace style
        'warn',
        '1tbs'
    ],
    'camelcase': 'warn', // require camelcase naming convention
    'comma-dangle': [ // disallow trailing commas
        'warn',
        'never'
    ],
    'comma-spacing': [ // require space after comma, disallow space before comma
        'warn',
        {
            before: false,
            after: true
        }
    ],
    'comma-style': [ // require a comma after and on the same line as an array element, object property, or variable declaration
        'warn',
        'last'
    ],
    'computed-property-spacing': [ // disallow spaces inside of computed properties
        'warn',
        'never'
    ],
    'consistent-this': [ // enforce consistent naming when capturing the current execution context
        'warn',
        'that'
    ],
    'eol-last': [ // require newline at the end of files
        'warn',
        'always'
    ],
    'func-call-spacing': [ // disallow spacing between function identifiers and their invocations
        'warn',
        'never'
    ],
    'function-call-argument-newline': [ // enforce line breaks between arguments of a function call
        'warn',
        'consistent'
    ],
    'function-paren-newline': [ // enforce consistent line breaks inside function parentheses
        'warn',
        'consistent'
    ],
    'implicit-arrow-linebreak': [ // enforce the location of arrow function bodies with implicit returns
        'warn',
        'beside'
    ],
    'indent': [ // require consistent indentation
        'warn',
        4, // 4 spaces
        {
            ignoredNodes: [
                'JSXElement *'
            ]
        }
    ],
    'jsx-quotes': [ // enforce the use of double quotes in JSX attributes
        'warn',
        'prefer-double'
    ],
    'key-spacing': [ // enforce consistent spacing between keys and values in object literal properties
        'warn',
        {
            beforeColon: false,
            afterColon: true
        }
    ],
    'keyword-spacing': [ // enforce consistent spacing before and after keywords
        'warn',
        {
            before: true,
            after: true
        }
    ],
    'lines-between-class-members': [ // require an empty line between class members
        'warn',
        'always'
    ],
    'new-cap': 'warn', // require constructor names to begin with a capital letter
    'new-parens': 'warn', // require parentheses when invoking a constructor with no arguments
    'no-bitwise': 'warn', // disallow bitwise operators
    'no-lonely-if': 'warn', // disallow `if` statements as the only statement in `else` blocks
    'no-mixed-operators': [ // disallow mixed binary operators
        'warn',
        {
            groups: [
                ['+', '-', '*', '/', '%', '**'],
                ['&', '|', '^', '~', '<<', '>>', '>>>'],
                ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                ['&&', '||'],
                ['in', 'instanceof']
            ],
            allowSamePrecedence: true
        }
    ],
    'no-mixed-spaces-and-tabs': 'warn', // disallow mixed spaces and tabs for indentation
    'no-multi-assign': 'warn', // disallow use of chained assignment expressions
    'no-multiple-empty-lines': [ // disallow multiple empty lines
        'warn',
        {
            max: 1,
            maxEOF: 1
        }
    ],
    'no-nested-ternary': 'warn', // disallow nested ternary expressions
    'no-new-object': 'warn', // disallow `Object` constructors
    'no-plusplus': [ // disallow the unary operators `++` and `--`
        'warn',
        {
            "allowForLoopAfterthoughts": true
        }
    ],
    'no-trailing-spaces': 'warn', // disallow trailing whitespace at the end of lines
    'no-underscore-dangle': 'warn', // disallow dangling underscores in identifiers
    'no-unneeded-ternary': 'warn', // disallow ternary operators when simpler alternatives exist
    'no-whitespace-before-property': 'warn', // disallow whitespace before properties
    'object-curly-newline': [ // enforce consistent line breaks inside braces
        'warn',
        {
            consistent: true
        }
    ],
    'object-curly-spacing': [ // enforce consistent spacing inside braces
        'warn',
        'always'
    ],
    'object-property-newline': [ // enforce placing object properties on separate lines
        'warn',
        {
            allowAllPropertiesOnSameLine: true
        }
    ],
    'one-var': [ // enforce variables to be declared either together or separately in functions
        'warn',
        'never'
    ],
    'one-var-declaration-per-line': [ // require newlines around variable declarations
        'warn',
        'always'
    ],
    'operator-assignment': 'warn', // require assignment operator shorthand where possible
    'operator-linebreak': [ // enforce consistent linebreak style for operators
        'warn',
        'before'
    ],
    'padded-blocks': [ // disallow padding within blocks
        'warn',
        'never'
    ],
    'padding-line-between-statements': [ // require or disallow padding lines between statements
        'warn',
        {
            blankLine: 'always',
            prev: '*',
            next: 'return'
        },
        {
            blankLine: 'always',
            prev: [
                'const',
                'let',
                'var'
            ],
            next: '*'
        },
        {
            blankLine: 'any',
            prev: [
                'const',
                'let',
                'var'
            ],
            next: [
                'const',
                'let',
                'var'
            ]
        }
    ],
    'prefer-object-spread': 'warn', // disallow using `Object.assign` with an object literal as the first argument and prefer the use of object spread instead
    'quote-props': [ // require quotes around object literal property names
        'warn',
        'as-needed'
    ],
    'quotes': [ // enforce the consistent use of either backticks, double, or single quotes
        'warn',
        'single'
    ],
    'semi': [ // require semicolons instead of ASI
        'warn',
        'always'
    ],
    'semi-spacing': [ // enforce consistent spacing before and after semicolons
        'warn',
        {
            before: false,
            after: true
        }
    ],
    'semi-style': [ // enforce location of semicolons
        'warn',
        'last'
    ],
    'space-before-blocks': [ // enforce consistent spacing before blocks
        'warn',
        'always'
    ],
    'space-before-function-paren': [ // enforce consistent spacing before `function` definition opening parenthesis
        'warn',
        {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always'
        }
    ],
    'space-in-parens': [ // enforce consistent spacing inside parentheses
        'warn',
        'never'
    ],
    'space-infix-ops': 'warn', // require spacing around infix operators
    'space-unary-ops': [ // enforce consistent spacing before or after unary operators
        'warn',
        {
            words: true,
            nonwords: false
        }
    ],
    'spaced-comment': [ // enforce consistent spacing after the `//` or `/*` in a comment
        'warn',
        'always'
    ],
    'switch-colon-spacing': 'warn', // enforce spacing around colons of `switch` statements
    'template-tag-spacing': [ // disallow spacing between template tags and their literals
        'warn',
        'never'
    ],
    'unicode-bom': 'error' // disallow Unicode byte order mark (BOM)
};

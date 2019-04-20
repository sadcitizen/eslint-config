/**
 * https://github.com/yannickcr/eslint-plugin-react
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
        es6: true
    },
    extends: [
        './jsx-a11y.js',
        './import.js'
    ],
    plugins: [
        'react'
    ],
    rules: {
        'react/boolean-prop-naming': [ // enforces consistent naming for boolean props
            'error',
            {
                rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+'
            }
        ],
        'react/button-has-type': 'error', // forbid `button` element without an explicit `type` attribute
        'react/default-props-match-prop-types': 'error', // prevent extraneous `defaultProps` on components
        'react/destructuring-assignment': 'off', // Rule enforces consistent usage of destructuring assignment in component
        'react/display-name': 'off', // prevent missing displayName in a react component definition
        'react/forbid-component-props': 'off', // forbid certain props on components
        'react/forbid-dom-props': 'off', // forbid certain props on DOM Nodes
        'react/forbid-elements': 'off', // forbid certain elements
        'react/forbid-prop-types': 'off', // forbid certain propTypes
        'react/forbid-foreign-prop-types': 'off', // forbid foreign propTypes
        'react/jsx-boolean-value': [ // enforce boolean attributes notation in jsx
            'warn',
            'never'
        ],
        'react/jsx-child-element-spacing': 'off', // enforce or disallow spaces inside of curly braces in jsx attributes and expressions
        'react/jsx-closing-bracket-location': [ // validate closing bracket location in jsx
            'warn',
            'tag-aligned'
        ],
        'react/jsx-closing-tag-location': 'error', // validate closing tag location in jsx
        'react/jsx-curly-spacing': [ // enforce or disallow spaces inside of curly braces in jsx attributes and expressions
            'error',
            'never'//,
            // {
            //     allowMultiline: true,
            //     children: {
            //         when: 'always'
            //     }
            // }
        ],
        'react/jsx-equals-spacing': [ // enforce or disallow spaces around equal signs in jsx attributes
            'error',
            'never'
        ],
        'react/jsx-filename-extension': [ // restrict file extensions that may contain jsx
            'warn',
            {
                extensions: [
                    '.js', // component.js
                    '.jsx' // component.jsx
                ]
            }
        ],
        'react/jsx-first-prop-new-line': [ // enforce position of the first prop in jsx
            'error',
            'multiline'
        ],
        'react/jsx-handler-names': [ // enforce event handler naming conventions in jsx
            'error',
            {
                eventHandlerPrefix: 'handle', // `handleClick`, `handleChange`, etc
                eventHandlerPropPrefix: 'on' // `onClick`, `onChange`, etc
            }
        ],
        'react/jsx-indent': [ // require consistent jsx indentation
            'error',
            4 // 4 spaces
        ],
        'react/jsx-indent-props': [ // require consistent props indentation in jsx
            'error',
            2 // 2 spaces
        ],
        'react/jsx-key': 'error', // validate jsx has key prop when in array or iterator
        'react/jsx-max-depth': 'off', // validate jsx maximum depth
        'react/jsx-max-props-per-line': [ // limit maximum of props on a single line in jsx
            'error',
            {
                maximum: 1,
                when: 'multiline'
            }
        ],
        'react/jsx-no-bind': [ // prevent usage of `bind()` and arrow functions in jsx props
            'error',
            {
                ignoreRefs: true
            }
        ],
        'react/jsx-no-comment-textnodes': 'warn', // prevent comments from being inserted as text nodes
        'react/jsx-no-duplicate-props': 'error', // prevent duplicate props in jsx
        'react/jsx-no-literals': 'off', // prevent usage of unwrapped jsx strings
        'react/jsx-no-target-blank': 'warn', // prevent usage of unsafe `target='_blank'`
        'react/jsx-no-undef': [ // disallow undeclared variables in jsx
            'error',
            {
                allowGlobals: true
            }
        ],
        'react/jsx-one-expression-per-line': [ // limit to one expression per line in jsx
            'warn',
            {
                allow: 'single-child'
            }
        ],
        'react/jsx-curly-brace-presence': [ // enforce curly braces or disallow unnecessary curly braces in jsx
            'error',
            'never'
        ],
        'react/jsx-pascal-case': 'error', // enforce PascalCase for user-defined jsx components
        // 'react/jsx-props-no-multi-spaces': 'error', // disallow multiple spaces between inline jsx props
        'react/jsx-sort-default-props': 'off', // enforce default props alphabetical sorting
        'react/jsx-sort-props': [ // enforce props alphabetical sorting
            'warn',
            {
                callbacksLast: true,
                noSortAlphabetically: true
            }
        ],
        'react/jsx-space-before-closing': 'off', // deprecated, replaced by react/jsx-tag-spacing
        'react/jsx-tag-spacing': [ // validate whitespace in and around the jsx opening and closing brackets
            'error',
            {
                closingSlash: 'never',
                beforeSelfClosing: 'always',
                afterOpening: 'never',
                beforeClosing: 'never'
            }
        ],
        'react/jsx-uses-react': 'error', // prevent react to be incorrectly marked as unused
        'react/jsx-uses-vars': 'error', // prevent variables used in jsx to be incorrectly marked as unused
        'react/jsx-wrap-multilines': [ // prevent missing parentheses around multilines jsx
            'error',
            {
                declaration: 'parens-new-line',
                assignment: 'parens-new-line',
                'return': 'parens-new-line',
                arrow: 'parens-new-line',
                condition: 'parens-new-line',
                logical: 'parens-new-line',
                prop: 'parens-new-line',
            }
        ],
        'react/no-access-state-in-setstate': 'warn', // prevent using `this.state` inside `this.setState`
        'react/no-array-index-key': 'error', // prevent using Array index in key props
        'react/no-children-prop': 'error', // prevent passing children as props
        'react/no-danger': 'error', // prevent usage of dangerous JSX properties
        'react/no-danger-with-children': 'error', // prevent problem with children and props.dangerouslySetInnerHTML
        'react/no-deprecated': 'warn', // prevent usage of deprecated methods, including component lifecyle methods
        'react/no-did-mount-set-state': 'error', // prevent usage of setState in `componentDidMount`
        'react/no-did-update-set-state': 'error', // prevent usage of setState in `componentDidUpdate`
        'react/no-direct-mutation-state': 'error', // prevent direct mutation of `this.state`
        'react/no-find-dom-node': 'warn', // prevent usage of `findDOMNode`
        'react/no-is-mounted': 'error', // prevent usage of `isMounted`
        'react/no-multi-comp': 'error', // prevent multiple component definition per file
        'react/no-redundant-should-component-update': 'warn', // prevent usage of shouldcomponentUpdate when extending react.Purecomponent
        'react/no-render-return-value': 'error', // prevent usage of the return value of `React.render`
        'react/no-set-state': 'off', // prevent usage of `setState`
        'react/no-typos': 'error', // prevent common casing typos
        'react/no-string-refs': 'warn', // prevent using string references in ref attribute.
        'react/no-this-in-sfc': 'error', // prevent using this in stateless functional components
        'react/no-unescaped-entities': 'warn', // prevent invalid characters from appearing in markup
        'react/no-unknown-property': 'error', // prevent usage of unknown DOM property
        'react/no-unused-prop-types': 'error', // prevent definitions of unused prop types
        'react/no-unused-state': 'error', // prevent definitions of unused state properties
        'react/no-will-update-set-state': 'error', // prevent usage of setState in componentWillUpdate
        'react/prefer-es6-class': [ // enforce ES5 or ES6 class for react components
            'error',
            'always'
        ],
        'react/prefer-stateless-function': [ // enforce stateless react components to be written as a pure function
            'warn',
            {
                ignorePureComponents: true
            }
        ],
        'react/prop-types': [ // prevent missing props validation in a react component definition
            'error',
            {
                ignore: [
                    'location',
                    'match',
                    'params'
                ]
            }
        ],
        'react/react-in-jsx-scope': 'error', // prevent missing react when using jsx
        'react/require-default-props': [ // enforce a defaultProps definition for every prop that is not a required prop
            'warn',
            {
                forbidDefaultForRequired: true
            }
        ],
        'react/require-optimization': 'off', // enforce react components to have a `shouldcomponentUpdate` method
        'react/require-render-return': 'error', // enforce ES5 or ES6 class for returning value in render function
        'react/self-closing-comp': 'error', // prevent extra closing tags for components without children
        'react/sort-comp': [ // enforce component methods order
            'error',
            {
                order: [
                    'type-annotations',
                    'static-methods',
                    'lifecycle',
                    '/^handle.+$/',
                    '/^is.+$/',
                    '/^has.+$/',
                    '/^get.+$/',
                    '/^set.+$/',
                    'everything-else',
                    '/^render.+$/',
                    'render'
                ]
            }
        ],
        'react/sort-prop-types': [ // enforce propTypes declarations alphabetical sorting
            'warn',
            {
                callbacksLast: true
            }
        ],
        'react/style-prop-object': 'error', // enforce style prop value being an object
        'react/void-dom-elements-no-children': 'error' // prevent void DOM elements (e.g. `<img />`, `<br />`) from receiving children
    }
};

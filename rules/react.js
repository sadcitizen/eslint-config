/**
 * https://github.com/yannickcr/eslint-plugin-react
 */
module.exports = {
    'react/boolean-prop-naming': [ // enforces consistent naming for boolean props
        'error',
        {
            rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+'
        }
    ],
    'react/button-has-type': 'error', // forbid `button` element without an explicit `type` attribute
    'react/default-props-match-prop-types': 'error', // enforce all `defaultProps` have a corresponding non-required PropType
    'react/display-name': 'off', // prevent missing `displayName` in a react component definition
    'react/jsx-boolean-value': [ // enforce boolean attributes notation in jsx
        'warn',
        'never'
    ],
    'react/jsx-closing-bracket-location': [ // validate closing bracket location in jsx
        'warn',
        'tag-aligned'
    ],
    'react/jsx-closing-tag-location': 'warn', // validate closing tag location in jsx
    'react/jsx-curly-brace-presence': [ // enforce curly braces or disallow unnecessary curly braces in jsx
        'error',
        'never'
    ],
    'react/jsx-curly-spacing': [ // enforce or disallow spaces inside of curly braces in jsx attributes and expressions
        'error',
        'never'
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
                '.jsx', // component.jsx
                '.ts', // component.ts
                '.tsx' // component.tsx
            ]
        }
    ],
    'react/jsx-first-prop-new-line': [ // enforce position of the first prop in jsx
        'error',
        'multiline'
    ],
    'react/jsx-fragments': [ // enforce shorthand or standard form for react fragments
        'warn',
        'syntax'
    ],
    'react/jsx-handler-names': [ // enforce event handler naming conventions in jsx
        'error',
        {
            eventHandlerPrefix: 'handle', // `handleClick`, `handleChange`, etc
            eventHandlerPropPrefix: 'on' // `onClick`, `onChange`, etc
        }
    ],
    'react/jsx-indent': [ // require consistent jsx indentation
        'warn',
        4 // 4 spaces
    ],
    'react/jsx-indent-props': [ // require consistent props indentation in jsx
        'warn',
        4 // 4 spaces
    ],
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
            allowArrowFunctions: true,
            ignoreRefs: true
        }
    ],
    'react/jsx-no-target-blank': 'warn', // prevent usage of unsafe `target='_blank'`
    'react/jsx-no-undef': [ // disallow undeclared variables in jsx
        'error',
        {
            allowGlobals: true
        }
    ],
    'react/jsx-no-useless-fragment': 'error', // disallow unnecessary fragments
    'react/jsx-pascal-case': 'error', // enforce PascalCase for user-defined jsx components
    'react/jsx-props-no-multi-spaces': 'error', // disallow multiple spaces between inline jsx props
    'react/jsx-sort-props': [ // enforce props alphabetical sorting
        'warn',
        {
            callbacksLast: true,
            noSortAlphabetically: true
        }
    ],
    'react/jsx-tag-spacing': [ // validate whitespace in and around the jsx opening and closing brackets
        'error',
        {
            closingSlash: 'never',
            beforeSelfClosing: 'always',
            afterOpening: 'never',
            beforeClosing: 'never'
        }
    ],
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
    'react/no-danger': 'error', // prevent usage of dangerous JSX properties
    'react/no-did-mount-set-state': 'error', // prevent usage of setState in `componentDidMount`
    'react/no-did-update-set-state': 'error', // prevent usage of setState in `componentDidUpdate`
    'react/no-multi-comp': 'error', // prevent multiple component definition per file
    'react/no-redundant-should-component-update': 'error', // prevent usage of shouldComponentUpdate when extending react.PureComponent
    'react/no-this-in-sfc': 'error', // prevent using this in stateless functional components
    'react/no-typos': 'error', // prevent common casing typos
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
    'react/require-default-props': [ // enforce a defaultProps definition for every prop that is not a required prop
        'warn',
        {
            forbidDefaultForRequired: true
        }
    ],
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
            noSortAlphabetically: true,
            callbacksLast: true
        }
    ],
    'react/style-prop-object': 'error', // enforce style prop value being an object
    'react/void-dom-elements-no-children': 'error' // prevent void DOM elements (e.g. `<img />`, `<br />`) from receiving children
};

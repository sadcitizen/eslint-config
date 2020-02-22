/**
 * https://github.com/jest-community/eslint-plugin-jest
 */
module.exports = {
    'jest/consistent-test-it': [ // enforce consistent `test` or `it` keyword
        'error',
        {
            fn: 'test',
            withinDescribe: 'test'
        }
    ],
    'jest/no-duplicate-hooks': 'error', // disallow duplicate hooks within a `describe` block
    'jest/no-if': 'error', // disallow conditional logic
    'jest/no-test-return-statement': 'error', // disallow explicitly returning from tests
    'jest/no-truthy-falsy': 'error', // disallow using `toBeTruthy()` & `toBeFalsy()`
    'jest/prefer-hooks-on-top':	'warn', // suggest to have all hooks at top-level before tests
    'jest/prefer-spy-on': 'warn', // suggest using `jest.spyOn()`
    'jest/prefer-to-be-null': 'warn', // suggest using `toBeNull()`
    'jest/prefer-to-be-undefined': 'warn', // suggest using `toBeUndefined()`
    'jest/prefer-to-contain': 'warn', // suggest using `toContain()`
    'jest/prefer-to-have-length': 'warn', // suggest using `toHaveLength()`
    'jest/prefer-todo': 'warn', // suggest using `test.todo()`
    'jest/require-top-level-describe': 'error', // require a top-level `describe` block
    'jest/valid-title': 'error' // enforce valid titles for jest blocks
};

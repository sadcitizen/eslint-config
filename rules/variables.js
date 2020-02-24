/**
 * https://eslint.org/docs/rules/#variables
 */
module.exports = {
    'no-label-var': 'error', // disallow labels that share a name with a variable
    'no-shadow': 'error', // disallow variable declarations from shadowing variables declared in the outer scope
    'no-undef-init': 'error', // disallow initializing variables to `undefined`
    'no-use-before-define': 'error' // disallow early use
};

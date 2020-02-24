/**
 * https://eslint.org/docs/rules/#node-js-and-commonjs
 */
module.exports = {
    'no-new-require': 'error', // disallow `new require()`
    'no-path-concat': 'error', // disallow string concatenation with `__dirname` and `__filename`, use `path.join` instead
    'no-process-exit': 'error' // disallow the use of `process.exit()`
};

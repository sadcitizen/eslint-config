const rules = require('./rules/import');

/**
 * https://github.com/benmosher/eslint-plugin-import
 */
module.exports = {
    plugins: [
        'import'
    ],
    extends: [
        'plugin:import/recommended'
    ],
    rules
};

/**
 * https://github.com/benmosher/eslint-plugin-import
 */
module.exports = {
    parser: 'babel-eslint',
    plugins: [
        'import'
    ],
    rules: {
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true
            }
        ],
        'import/no-named-as-default-member': 'off'
    }
};

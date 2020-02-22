/**
 * https://github.com/evcohen/eslint-plugin-jsx-a11y
 */
module.exports = {
    'jsx-a11y/accessible-emoji': 'warn', // enforce emojis are wrapped in and provide screenreader access.
    'jsx-a11y/alt-text': 'warn', // enforce all elements that require alternative text have meaningful information to relay back to end user.
    'jsx-a11y/click-events-have-key-events': 'off', // enforce a clickable non-interactive element has at least one keyboard event listener.
    'jsx-a11y/lang': 'error', // enforce lang attribute has a valid value.
    'jsx-a11y/media-has-caption': 'warn', // enforces that <audio> and <video> elements must have a <track> for captions.
    'jsx-a11y/no-onchange': 'warn', // enforce usage of onBlur over onChange on select menus for accessibility.
    'jsx-a11y/no-static-element-interactions': 'warn' // enforce that non-interactive, visible elements (such as <div>) that have click handlers use the role attribute.
};

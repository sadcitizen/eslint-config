/**
 * https://github.com/evcohen/eslint-plugin-jsx-a11y
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
        es6: true,
        jest: true,
        node: true
    },
    plugins: [
        'jsx-a11y'
    ],
    rules: {
        'jsx-a11y/accessible-emoji': 'warn', // enforce emojis are wrapped in and provide screenreader access.
        'jsx-a11y/alt-text': '', // enforce all elements that require alternative text have meaningful information to relay back to end user.
        'jsx-a11y/anchor-has-content': '', // enforce all anchors to contain accessible content.
        'jsx-a11y/anchor-is-valid': '', // enforce all anchors are valid, navigable elements.
        'jsx-a11y/aria-activedescendant-has-tabindex': '', // enforce elements with aria-activedescendant are tabbable.
        'jsx-a11y/aria-props': '', // enforce all aria-* props are valid.
        'jsx-a11y/aria-proptypes': '', // enforce ARIA state and property values are valid.
        'jsx-a11y/aria-role': '', // enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
        'jsx-a11y/aria-unsupported-elements': '', // enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
        'jsx-a11y/click-events-have-key-events': '', // enforce a clickable non-interactive element has at least one keyboard event listener.
        'jsx-a11y/heading-has-content': '', // enforce heading (h1, h2, etc) elements contain accessible content.
        'jsx-a11y/html-has-lang': '', // enforce <html> element has lang prop.
        'jsx-a11y/iframe-has-title': '', // enforce iframe elements have a title attribute.
        'jsx-a11y/img-redundant-alt': '', // enforce <img> alt prop does not contain the word "image", "picture", or "photo".
        'jsx-a11y/interactive-supports-focus': '', // enforce that elements with interactive handlers like onClick must be focusable.
        'jsx-a11y/label-has-for': '', // enforce that <label> elements have the htmlFor prop.
        'jsx-a11y/lang': '', // enforce lang attribute has a valid value.
        'jsx-a11y/media-has-caption': '', // enforces that <audio> and <video> elements must have a <track> for captions.
        'jsx-a11y/mouse-events-have-key-events': '', // enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users.
        'jsx-a11y/no-access-key': '', // enforce that the accessKey prop is not used on any element to avoid complications with keyboard commands used by a screenreader.
        'jsx-a11y/no-autofocus': '', // enforce autoFocus prop is not used.
        'jsx-a11y/no-distracting-elements': '', // enforce distracting elements are not used.
        'jsx-a11y/no-interactive-element-to-noninteractive-role': '', // interactive elements should not be assigned non-interactive roles.
        'jsx-a11y/no-noninteractive-element-interactions': '', // non-interactive elements should not be assigned mouse or keyboard event listeners.
        'jsx-a11y/no-noninteractive-element-to-interactive-role': '', // non-interactive elements should not be assigned interactive roles.
        'jsx-a11y/no-noninteractive-tabindex': '', // `tabIndex` should only be declared on interactive elements.
        'jsx-a11y/no-onchange': '', // enforce usage of onBlur over onChange on select menus for accessibility.
        'jsx-a11y/no-redundant-roles': '', // enforce explicit role property is not the same as implicit/default role property on element.
        'jsx-a11y/no-static-element-interactions': '', // enforce that non-interactive, visible elements (such as <div>) that have click handlers use the role attribute.
        'jsx-a11y/role-has-required-aria-props': '', // enforce that elements with ARIA roles must have all required attributes for that role.
        'jsx-a11y/role-supports-aria-props': '', // enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role.
        'jsx-a11y/scope': '', // enforce scope prop is only used on <th> elements.
        'jsx-a11y/tabindex-no-positive': '' // enforce tabIndex value is not greater than zero.
    }
};





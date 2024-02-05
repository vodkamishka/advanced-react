module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:storybook/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true,
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "ecmaVersion": "latest",
                "sourceType": "module",
            },
        }
    ],
    "plugins": [
        "react",
        "i18next",
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "rules": {
        "react/jsx-indent": [2, 4],
        "@typescript-eslint/indent": [2, 4],
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "semi": ["error", "always"],
        "@typescript-eslint/semi": "off",
        '@typescript-eslint/naming-convention': "error",
        'i18next/no-literal-string': ['error', {markupOnly: true}],
    },
}

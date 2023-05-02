module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "node": true,
        "mocha": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:node/recommended",
        "plugin:mocha/recommended",
        "plugin:security/recommended",
    ],
    "overrides": [
        {
            "plugins": ["mocha"],
            "files": ["test/*.js"],
            "rules": {
                "no-unused-vars": "warn",
                "no-undef": "off",
                "no-console": "off",
                "classs-methods-use-this": "off",
            },
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
    },
};

module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "import",
        "jsx-a11y",
        "react-hooks",
    ],
    "rules": {
    }
};

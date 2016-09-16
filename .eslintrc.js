module.exports = {
    /*
    "env": {
        "browser": true,
        "es6": true
    },
    "extends":
       "eslint:recommended", 
    "installedESLint": true,
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
    */
    "extends": [
        "1stdibs",
        "1stdibs/jasmine",
        "1stdibs/node",
        "1stdibs/es6",
        "1stdibs/react"
    ]
};
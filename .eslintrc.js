module.exports = {
    "extends": "airbnb-base",
    "plugins": [
        "import"
    ],
    "rules": {
        "no-unused-vars": [1, { "vars": "all", "args": "after-used" }],
    },
    "env": {
      "browser":true
    }
};
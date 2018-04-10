module.exports = {
  "env": {
    "browser": true,
    "jest": true,
    "node": true
  },
  "extends": "airbnb",
  "rules": {
    "arrow-parens": [2,"as-needed"],
    "import/prefer-default-export": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/label-has-for": 0,
    "no-confusing-arrow": 0,
    "no-mixed-operators": 0,
    "no-multiple-empty-lines": [2, {"max": 1}],
    "no-nested-ternary": 0,
    "no-restricted-syntax": 0,
    "no-return-assign": 0,
    "object-curly-newline": 0,
    "object-curly-spacing": [2, "never"],
    "react/jsx-filename-extension": 0,
    "react/prefer-stateless-function": 0,
    "react/require-default-props": 0,
    "semi": [2, "never"],
    "sort-keys": [2, "asc", {"caseSensitive": false}],
    "sort-vars": [2, {"ignoreCase": true}]
  }
}

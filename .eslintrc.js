{
  "env": {
    "browser": true,
      "es2021": true
  },
  "extends": [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
    "parser":
  "babel-eslint",
    "@typescript-eslint/parser",
    "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint"],
    "rules": {
    "react/react-in-jsx-scope": "off"
  }
}

module.exports = {
    parser: "@typescript-eslint/parser",
    extends: ["plugin:@typescript-eslint/recommended", "react-app", 
    'prettier/@typescript-eslint',  
    'plugin:prettier/recommended',   ],
    plugins: ["@typescript-eslint", "react"],
    rules: {
      'implicit-arrow-linebreak': 'off',    
      "comma-dangle": "off",    
      "indent": "off",    
      "no-trailing-spaces": "off"  
    },
    parserOptions:  {
      ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
      sourceType:  'module',  // Allows for the use of imports
    },
  };


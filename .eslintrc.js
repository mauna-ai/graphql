module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  overrides: [
    {
      files: ["**/*.graphql"],
      parser: "@graphql-eslint/eslint-plugin",
      plugins: ["@graphql-eslint"],
      rules: {
        // See complete list: https://github.com/dotansimha/graphql-eslint/blob/HEAD/docs/README.md
        "@graphql-eslint/no-deprecated": ["error"],
        "@graphql-eslint/no-case-insensitive-enum-values-duplicates": ["error"],
        "@graphql-eslint/avoid-duplicate-fields": ["error"],
        "@graphql-eslint/prettier": ["error"],
        "@graphql-eslint/no-unused-variables": ["error"],
        "@graphql-eslint/unique-argument-names": ["error"],
        "@graphql-eslint/unique-input-field-names": ["error"],
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 12,
    schemaOptions: {
      assumeValid: true
    },
  },
  rules: {
  }
};

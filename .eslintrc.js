module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier'
  ],
  plugins: [
  ],
  ignorePatterns: [
    "doc/"
  ],
  // add your custom rules here
  rules: {
    "no-useless-constructor": "off",
    "no-console": "off",
    "vue/attribute-hyphenation": "off"
  }
}

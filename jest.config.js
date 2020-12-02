module.exports = {
  verbose: true,
  moduleFileExtensions: ["ts", "js", "json", "vue"],
  transform: {
    ".*\\.(ts|js)$": "babel-jest",
    ".*\\.(ts)$": "ts-jest",
    ".*\\.(vue)$": "vue-jest"
  },
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1",
    "^vue$": "vue/dist/vue.esm.js"
  },
  collectCoverage: false,
  collectCoverageFrom: [
    "src/**/*.{ts,js,vue}",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**/dist/**"
  ]
};

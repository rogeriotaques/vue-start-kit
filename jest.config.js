module.exports = {
  verbose: true,

  moduleDirectories: ['node_modules', 'src'],

  moduleFileExtensions: ['ts', 'js', 'json'],

  transform: {
    '^.+\\.(ts|tsx|js)$': 'ts-jest'
  },

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^vue$': 'vue/dist/vue.esm.js'
  }

  // collectCoverage: false,
  // collectCoverageFrom: ['src/**/*.{ts,js,vue}', '!**/node_modules/**', '!**/coverage/**', '!**/dist/**']
};

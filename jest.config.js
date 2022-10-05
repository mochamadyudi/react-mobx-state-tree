module.exports = {
  setupFilesAfterEnv: [
    '@testing-library/react/cleanup-after-each',
    '@testing-library/jest-dom/extend-expect'
  ],
  testMatch: [
    '**/?(*.)test.js?(x)'
  ],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      diagnostics: false,
    },
  },
  testEnvironment: 'node',
  preset: 'ts-jest',
}
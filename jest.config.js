
module.exports = {
  collectCoverage: true,
  moduleDirectories: ['./node_modules', 'src'],
  collectCoverageFrom: ['src/__test__/**/*?(*.)test.js?(x)'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
}
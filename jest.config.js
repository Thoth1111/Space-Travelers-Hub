module.exports = {
  roots: ['<rootDir>/src'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};

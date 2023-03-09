module.exports = {
    // The root of your source code
    roots: ['<rootDir>/src'],
  
    // The paths to modules that run some code to configure or set up the testing environment before each test
    setupFiles: ['<rootDir>/jest.setup.js'],
  
    // The test environment that will be used for testing
    testEnvironment: 'jsdom',
  
    // The glob patterns Jest uses to detect test files
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  
    // The transformer that will be used to process the code
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
  };
  
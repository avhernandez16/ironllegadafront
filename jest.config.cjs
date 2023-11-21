// jest.config.cjs
module.exports = {
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>/tests/**/*.test.js'], // Ajusta la ruta de tus pruebas según tu estructura
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Opcional: para configuración adicional antes de las pruebas
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
  };
  
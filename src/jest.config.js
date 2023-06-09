const baseConfig = require("../jest.config");

module.exports = {
  ...baseConfig,
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/src/tsconfig.spec.json",
      diagnostics: false,
    },
  },
};

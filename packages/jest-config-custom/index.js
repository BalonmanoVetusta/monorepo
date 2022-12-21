/** @type {import('ts-jest').JestConfigWithTsJest} */
import { dirname, parse, resolve } from 'node:path';

const baseConfig = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testRegex: `'(/__tests__/.*|(\\.|/)(test))\\.(jsx?|tsx?)$',`,
  testPathIgnorePatterns: ['node_modules', '<rootDir>/.next/'],
  coverageDirectory: 'coverage/',
  moduleNameMapper: {
    '.json$': 'identity-obj-proxy',
  },
  moduleDirectories: ['node_modules'],
  // snapshotSerializers: ['enzyme-to-json/serializer'],
};

export function withBaseJestConfig(options = {}) {
  const packageFilePathResolved = resolve('.');
  const packageFilePath = parse(packageFilePathResolved);
  const packageName = packageFilePath.name;

  return {
    ...baseConfig,
    roots: [packageFilePath.dir],
    testEnvironment: 'jsdom',
    displayName: packageName,
    rootDir: dirname(packageFilePath.dir),
    projects: [
      `<rootDir>/packages/${packageName}/jest.config.js`,
      `<rootDir>/apps/${packageName}/jest.config.js`,
    ],
    collectCoverageFrom: [
      `<rootDir>/packages/${packageName}/__test__`,
      `<rootDir>/apps/${packageName}/__test__`,
      `<rootDir>/packages/${packageName}/*.test.{js,jsx,ts,tsx}`,
      `<rootDir>/apps/${packageName}/*.test.{js,jsx,ts,tsx}`,
    ],
    ...options,
  };
}

export function withBaseJestConfigForNode(options = {}) {
  return withBaseJestConfig({
    ...options,
    testEnvironment: 'node',
  });
}

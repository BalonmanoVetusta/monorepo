/** @type {import('ts-jest').JestConfigWithTsJest} */
import { dirname, parse, resolve, join } from 'node:path';

const baseConfig = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['node_modules', '.next/'],
  collectCoverageFrom: [
    join('<rootDir>', '__test__'),
    join('<rootDir>', '*.spec.{js,jsx,ts,tsx}')
  ],
  moduleDirectories: ['node_modules'],
  // snapshotSerializers: ['enzyme-to-json/serializer'],
};

export function withBaseJestConfig(options = {}) {
  const packageFilePathResolved = resolve('.');
  const packageFilePath = parse(packageFilePathResolved);
  const packageName = packageFilePath.name;
  const rootDir = join(packageFilePath.dir, packageName);
  const coverageDirectory = join(dirname(packageFilePath.dir), 'coverage', packageName);

  const projects = [
    join('<rootDir>', 'apps'),
    join('<rootDir>', 'packages')
  ]

  return {
    ...baseConfig,
    testEnvironment: 'jsdom',
    displayName: packageName,
    rootDir,
    coverageDirectory,
    ...options,
  };
}

export function withBaseJestConfigForNode(options = {}) {
  return withBaseJestConfig({
    ...options,
    testEnvironment: 'node',
  });
}

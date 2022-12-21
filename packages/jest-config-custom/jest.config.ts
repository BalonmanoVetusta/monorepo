/** @type {import('ts-jest').JestConfigWithTsJest} */
import { Config } from 'jest';
import { withBaseJestConfigForNode } from '.';

const jestConfig: Config = withBaseJestConfigForNode();

export default jestConfig;

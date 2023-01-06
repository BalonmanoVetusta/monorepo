/** @type {import('ts-jest').JestConfigWithTsJest} */
import { Config } from 'jest'

import { withBaseJestConfigForNode } from 'jest-config-custom';

const jestConfig: Config = withBaseJestConfigForNode();

export default jestConfig;

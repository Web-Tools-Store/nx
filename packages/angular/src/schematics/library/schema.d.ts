import { UnitTestRunner } from '../../utils/test-runners';

export interface Schema {
  name: string;
  skipFormat: boolean;
  simpleModuleName: boolean;
  addModuleSpec?: boolean;
  directory?: string;
  sourceDir?: string;
  buildable: boolean;
  publishable: boolean;
  importPath?: string;

  spec?: boolean;
  flat?: boolean;
  commonModule?: boolean;

  style?: string;
  prefix?: string;
  routing?: boolean;
  lazy?: boolean;
  parentModule?: string;
  tags?: string;

  unitTestRunner: UnitTestRunner;
}

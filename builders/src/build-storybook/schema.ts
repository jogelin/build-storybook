/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 * https://bcherny.github.io/json-schema-to-typescript-browser/
 */

import { AssetPatternObject } from '@angular-devkit/build-angular';
import { StorybookSchema } from '../storybook-schema';

export interface NormalizedBuildStorybookSchema extends BuildStorybookSchema {
  assets: AssetPatternObject[];
}

/**
 * Build Storybook target options (https://storybook.js.org/configurations/cli-options/)
 */
export interface BuildStorybookSchema extends StorybookSchema {
  /**
   * Directory where to store built files
   */
  outputDir: string;
  /**
   * Enable watch mode
   */
  watch?: boolean;
}

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 * https://bcherny.github.io/json-schema-to-typescript-browser/
 */

/**
 * Start Storybook target options (https://storybook.js.org/configurations/cli-options/)
 */
export interface StartStorybookSchema {
  /**
   * Target to serve.
   */
  browserTarget: string;
  /**
   * Port to run Storybook
   */
  port?: number;
  /**
   * Host to run Storybook
   */
  host?: string;
  /**
   * Directories where to load static files from
   */
  staticDir?: string[];
  /**
   * Directory where to load Storybook configurations from
   */
  configDir?: string;
  /**
   * Serve Storybook over HTTPS. Note: You must provide your own certificate information.
   */
  https?: boolean;
  /**
   * Provide an SSL certificate. (Required with --https)
   */
  sslCert?: string;
  /**
   * Provide an SSL key. (Required with --https)
   */
  sslKey?: string;
  /**
   * Exit after successful start
   */
  smokeTest?: boolean;
  /**
   * Suppress verbose build output
   */
  quiet?: boolean;
}

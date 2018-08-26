import { wrapInitialConfig } from '@storybook/angular/src/server/';
import { ConfigurationWrapper } from './storybook.types';

export function wrapInitialConfig(tsConfig: string): ConfigurationWrapper {
  return (config, configDir) => ({
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: require.resolve('ts-loader'),
              options: loadTsConfig(configDir)
            },
            require.resolve('angular2-template-loader')
          ]
        },
        {
          test: /[/\\]@angular[/\\]core[/\\].+\.js$/,
          parser: { system: true }
        },
        {
          test: /\.html$/,
          loader: 'raw-loader',
          exclude: /\.async\.html$/
        },
        {
          test: /\.scss$/,
          use: [require.resolve('raw-loader'), require.resolve('sass-loader')]
        }
      ]
    },
    resolve: {
      ...config.resolve,
      extensions: [...config.resolve.extensions, '.ts', '.tsx']
    }
  });
}

import { type BuildOptions } from './types/config';
import { type Configuration as WebpackConfiguration } from 'webpack';
import { type Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { buildDevServer } from './buildDevServer.ts';

interface Configuration extends WebpackConfiguration {
    devServer?: DevServerConfiguration
}

export function buildWebpackConfig (options: BuildOptions): Configuration {
    const { paths, mode, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    };
}

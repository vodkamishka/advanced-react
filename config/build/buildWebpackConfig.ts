import { type BuildOptions } from './types/config';
import { type Configuration as WebpackConfiguration } from 'webpack';
import { type Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { buildDevServer, buildLoaders, buildPlugins, buildResolvers } from "./index";



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

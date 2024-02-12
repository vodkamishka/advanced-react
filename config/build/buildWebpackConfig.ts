import { type BuildOptions } from './types/config';
import { type Configuration as WebpackConfiguration } from 'webpack';
import { type Configuration as DevServerConfiguration } from 'webpack-dev-server';
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
//import {buildDevServer} from "./buildDevServer";
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
        devServer: isDev ? {
            port: options.port,
            open: true,
            // Allows to proxy requests through a specified index page (by default 'index.html'), useful for Single Page Applications that utilise the HTML5 History API.
            historyApiFallback: true,
            // Hot module replacement,
            hot: true,
            // Shows a full-screen overlay in the browser when there are compiler errors or warnings
            client: {
                overlay: false // Мешал отображению результата ErrorBoundary
            }
        } : undefined
    };
}

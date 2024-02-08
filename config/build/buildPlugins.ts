import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { type BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function buildPlugins ({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin({}),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        // Плагин для передачи глобальных переменных во все приложение;
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        })
    ];

    if (isDev) {
        // Hot Module Replacement
        plugins.push(new webpack.HotModuleReplacementPlugin());

        // Visualize size of webpack output files with an interactive zoomable treemap
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false
        }));
    }

    return plugins;
}

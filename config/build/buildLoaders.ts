import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { buildCssLoader } from './loaders/buildCssLoader.ts';

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    };

    // Если не используем тайпскрипт - нужен babel-loader
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    };

    const cssLoader = buildCssLoader(isDev);

    return [
        fileLoader,
        svgLoader,
        typeScriptLoader,
        cssLoader
    ];
}

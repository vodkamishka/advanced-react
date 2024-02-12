import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
// import { buildCssLoader } from './loaders/buildCssLoader';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

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

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // 'style-loader' - Creates `style` nodes from JS strings
            // MiniCssExtractPlugin.loader - Separate js and css
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        // модульная система css применятеся только к файлам с расширением '.module.'
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        // формирование названия класса в зависсимости от mode
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:5]'
                    }
                }
            },
            // Compiles Sass to CSS
            'sass-loader'
        ],
        exclude: /node_modules/
    };

    return [
        fileLoader,
        svgLoader,
        typeScriptLoader,
        cssLoader
    ];
}

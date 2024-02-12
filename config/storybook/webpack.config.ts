import type webpack from 'webpack';
import { type BuildPaths } from '../build/types/config';
import path from 'path';
// import { buildCssLoader } from '../build/loaders/buildCssLoader';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    };

    const isDev = true;

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.push(
        {
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
        }
    );

    return config;
};

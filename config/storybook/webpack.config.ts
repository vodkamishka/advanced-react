import type webpack from 'webpack';
import { type BuildPaths } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/Loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    };

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.push(buildCssLoader(true));

    return config;
};

import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: [ '.tsx', '.ts', '.js'],
        // Предпочитетльны абсолютные пути
        preferAbsolute: true,
        // Настройка позволяет использовать абсолютный импорт к папке src и node_modules
        modules: [options.paths.src, 'node_modules'],
        // Для каждого модуля главный файл index
        mainFiles: ['index'],
        alias: {}
    }
}
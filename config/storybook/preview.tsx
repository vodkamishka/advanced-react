import type { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    decorators: [
        StyleDecorator
    ]
};

export default preview;

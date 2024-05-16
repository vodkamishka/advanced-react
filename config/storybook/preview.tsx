import type { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';

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
        (Story) => (
            <StoreProvider>
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                <Story />
            </StoreProvider>
        )
    ]
};

export default preview;

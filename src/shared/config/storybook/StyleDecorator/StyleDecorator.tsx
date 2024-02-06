import '../../../../app/styles/index.scss';
import type { Decorator } from '@storybook/react';

export const StyleDecorator: Decorator = (Story) => (
    <div className={'yml'}>
        <Story/>
    </div>
);

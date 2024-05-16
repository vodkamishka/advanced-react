import type { Meta, StoryObj } from '@storybook/react';
import {Text, TextTheme} from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'description description description'
    }
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title lorem ipsum'
    }
};

export const OnlyText: Story = {
    args: {
        text: 'description description description'
    }
};

export const Error: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'description description description',
        theme: TextTheme.ERROR
    }
};

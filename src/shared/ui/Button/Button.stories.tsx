import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonTheme } from './Button';
import { Theme } from 'app/providers/ThemeProvider';
import '../../../app/styles/index.scss';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        theme: { control: Theme.DARK }
    }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Clear'
    }
};

export const ClearInverted: Story = {
    args: {
        theme: ButtonTheme.CLEAR_INVERTED,
        children: 'Clear inverted'
    }
};

export const Primary: Story = {
    args: {
        children: 'Primary'
    }
};

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Outline'
    }
};

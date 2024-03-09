import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Theme } from 'app/providers/ThemeProvider';
import '../../../app/styles/index.scss';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        isOpen: true,
        children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n' +
            '               the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley\n' +
            '                of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n' +
            '                but also the leap into electronic typesetting, remaining essentially unchanged. It was\n' +
            '                popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n' +
            '                and more recently with desktop publishing software like Aldus PageMaker including versions of\n' +
            '                Lorem Ipsum.'
    }
};

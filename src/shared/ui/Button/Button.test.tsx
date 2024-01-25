import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';
import { Theme } from 'app/providers/ThemeProvider';

describe('Button', () => {
    test('Test render', () => {
        render(<Button theme={Theme.DARK}>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Test dark theme', () => {
        render(<Button theme={Theme.DARK}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('dark');
        screen.debug();
    });
});

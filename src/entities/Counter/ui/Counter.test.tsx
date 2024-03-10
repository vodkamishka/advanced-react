import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Counter render', () => {
        componentRender(<Counter/>, {
            initialState: {
                counter: { value: 10 }
            }
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment', () => {
        componentRender(<Counter/>, {
            initialState: {
                counter: { value: 10 }
            }
        });
        void userEvent.click(screen.getByTestId('increment-btn'))
            .then(() => {
                expect(screen.getByTestId('value-title')).toHaveTextContent('11');
            });
    });

    test('Counter render', () => {
        componentRender(<Counter/>, {
            initialState: {
                counter: { value: 10 }
            }
        });
        void userEvent.click(screen.getByTestId('decrement-btn'))
            .then(() => {
                expect(screen.getByTestId('value-title')).toHaveTextContent('9');
            });
    });
});

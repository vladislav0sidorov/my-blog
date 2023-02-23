import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from 'shared/config/tests/componentRender/componentRender';

import { Counter } from './Counter';

describe('Counter', () => {
  test('Render counter', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });
  test('Render increment', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    });
    userEvent.click(screen.getByTestId('increment-button'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });
  test('Render decrement', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    });
    userEvent.click(screen.getByTestId('decrement-button'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});

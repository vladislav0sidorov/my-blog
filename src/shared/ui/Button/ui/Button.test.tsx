import { render, screen } from '@testing-library/react';

import { Button, ButtonVariables } from './Button';

describe('Button', () => {
  test('Render test', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('Testing clear theme', () => {
    render(<Button theme={ButtonVariables.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});

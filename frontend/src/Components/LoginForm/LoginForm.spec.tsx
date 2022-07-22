import React from 'react';
import { render } from '@testing-library/react';
import { LoginForm } from '.';

describe('Teste do componente LoginForm', () => {
  test('renderizacao sem quebrar', () => {
    const { getByText } = render(<LoginForm />);
    expect(getByText).toBeTruthy();
  });
});

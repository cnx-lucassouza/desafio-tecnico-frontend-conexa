import React from 'react';
import { render } from '@testing-library/react';
import { LoginPage } from '.';

describe('Teste do componente LoginPage', () => {
  test('renderizacao sem quebrar', () => {
    const { getByText } = render(<LoginPage />);
    expect(getByText).toBeTruthy();
  });
});
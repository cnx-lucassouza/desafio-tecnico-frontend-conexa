import React from 'react';
import { render } from '@testing-library/react';
import { ErrorMessage } from '.';

describe('Teste do componente ErrorMessage', () => {
  test('renderizacao sem quebrar', () => {
    const { getByTestId } = render(
      <ErrorMessage children={undefined} />,
    );
    expect(getByTestId('pure_errorMessage')).toBeInTheDocument();
  });
});

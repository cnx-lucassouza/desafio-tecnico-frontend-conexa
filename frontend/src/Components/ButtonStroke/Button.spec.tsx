import React from 'react';
import { render } from '@testing-library/react';
import { ButtonStroke } from '.';

describe('Teste do componente Button', () => {
  test('renderizacao sem quebrar', () => {
    const { getByTestId } = render(
      <ButtonStroke children={undefined} />,
    );
    expect(getByTestId('pure_button')).toBeInTheDocument();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '.';

describe('Teste do componente Button', () => {
  test('renderizacao sem quebrar', () => {
    const { getByTestId } = render(
      <Button children={undefined} />,
    );
    expect(getByTestId('pure_button')).toBeInTheDocument();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import { FixedFooter } from '.';

describe('Teste do componente Footer', () => {
  test('renderizacao sem quebrar', () => {
    const { getByText } = render(
      <FixedFooter onOpenNewTransactionModal={function (): void {}} />,
    );
    expect(getByText).toBeTruthy();
  });
});

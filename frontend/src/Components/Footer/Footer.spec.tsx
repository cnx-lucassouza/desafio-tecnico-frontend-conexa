import React from 'react';
import { render } from '@testing-library/react';
import { FixedFooter } from '.';

describe('Teste do componente Footer', () => {
  test('renderizacao sem quebrar', () => {
    const { getByText } = render(
      <div id="root">
        <FixedFooter onOpenNewTransactionModal={() => {}} />
      </div>,
    );
    expect(getByText).toBeTruthy();
  });
});

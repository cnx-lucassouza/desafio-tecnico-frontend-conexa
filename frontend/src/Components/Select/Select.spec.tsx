import React from 'react';
import { render } from '@testing-library/react';
import { Select } from '.';
import userEvent from '@testing-library/user-event';

describe('Teste do componente Select', () => {
  test('renderizacao sem quebrar', () => {
    const { getByText } = render(<Select name={''} label={''} />);
    expect(getByText).toBeTruthy();
  });

  test('Verificando o select', async () => {
    const { getByRole, getByText } = render(
      <Select name={''} label={'Resposta'} />,
    );

    await userEvent.click(getByRole('select'));
    const answer = getByText('Resposta');
    expect(answer.innerHTML).toBe('Resposta');
  });
});

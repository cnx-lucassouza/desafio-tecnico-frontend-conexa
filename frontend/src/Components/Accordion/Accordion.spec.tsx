import React from 'react';
import { getByText, render } from '@testing-library/react';
import { AccordionAction } from '.';
import { click } from '@testing-library/user-event/dist/click';
import userEvent from '@testing-library/user-event';

describe('Teste do componente Accordion', () => {
  test('renderizacao sem quebrar', () => {
    const { getByText } = render(<AccordionAction question={''} answer={''} />);
    expect(getByText).toBeTruthy();
  });
  test('Verificando o botão', async () => {
    const { getByRole, getByText } = render(
      <AccordionAction question={''} answer={'Resposta'} />,
    );

    await userEvent.click(getByRole('button'));
    const answer = getByText('Resposta');
    expect(answer.innerHTML).toBe('Resposta');
  });
});

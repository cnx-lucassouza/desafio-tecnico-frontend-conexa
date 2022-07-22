import React from 'react';
import { render } from '@testing-library/react';
import { WaitingRoomInform } from '.';

describe('Teste do componente WaitingRoomInform', () => {
  test('renderizacao sem quebrar', () => {
    const { getByText } = render(<WaitingRoomInform />);
    expect(getByText).toBeTruthy();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import { AttendanceList } from '.';

describe('Teste do componente AttendanceList', () => {
  test('renderizacao sem quebrar', () => {
    const { getByText } = render(<AttendanceList attendances={[]} />);
    expect(getByText).toBeTruthy();
  });
});

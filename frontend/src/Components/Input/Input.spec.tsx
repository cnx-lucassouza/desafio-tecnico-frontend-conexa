import React from 'react';
import { render } from '@testing-library/react';
import { Input } from '.';

describe('Teste do componente Input', () => {
  test('renderizacao sem quebrar', () => {
    const { getByText } = render(<Input name={''} label={''} tooltip={''} type={'text'}/>);
    expect(getByText).toBeTruthy();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { AttendanceList } from '.';

describe('Teste do componente AttendanceList', () => {
  test('Sem atendimento', () => {
    render(<AttendanceList attendances={[]} />);
    const noAttendance = screen.getByTestId('no-attendance');
    expect(noAttendance).toHaveTextContent('Não há nenhuma consulta agendada');
  });
  test('Com Atendimento atendimento', () => {
    render(<AttendanceList attendances={[]} />);
    const attendace1 = screen.getByTestId('attendance-1');
    expect(attendace1).toHaveTextContent('Nome do paciente');
    expect(attendace1).toHaveTextContent('Sobrenome do paciente');
    expect(attendace1).toHaveTextContent('Valida a data se ta ok');
    expect(attendace1).toHaveTextContent('Valida a hora se ta ok');
    const attendaceButton = screen.getByTestId('attendance-1-button');
    expect(attendaceButton).toHaveTextContent('Atender');
      attendaceButton.click();
  });
});

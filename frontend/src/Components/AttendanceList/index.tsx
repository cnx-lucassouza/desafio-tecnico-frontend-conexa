import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { NoAttendance } from '../NoAttendance/index';
import {
  AttendanceListContainer,
  AttendanceListItem,
  AttendanceListCounter,
} from './styles';
import { AttendanceListProps } from './types';

export const AttendanceList: FunctionComponent<AttendanceListProps> = ({ attendances }) => {
  const navigate = useNavigate();

  if (!attendances.length) {
    return <NoAttendance>Não há nenhuma consulta agendada</NoAttendance>;
  }
  function callAttendance() {
    navigate('waitingroom');
  }

  return (
    <AttendanceListContainer>
      <AttendanceListCounter>
        {attendances.length} consultas agendadas
      </AttendanceListCounter>

      {attendances.map(({ id, date, patient }) => {
        const fullName = `${patient.first_name} ${patient.last_name}`;
        const formattedDate = new Date(date).toLocaleDateString('pt-BR');
        const formattedTime = new Date(date).toLocaleTimeString('pt-BR', {
          hour: 'numeric',
          minute: 'numeric',
        });

        return (
          <AttendanceListItem key={id} data-testid={`attendance-${id}`}>
            <div>
              <p title={fullName}>{fullName}</p>
              <span>
                {formattedDate} às {formattedTime}
              </span>
            </div>

            <Button
              onClick={callAttendance}
              data-testid={`attendance-${id}-button`}
            >
              Atender
            </Button>
          </AttendanceListItem>
        );
      })}
    </AttendanceListContainer>
  );
};

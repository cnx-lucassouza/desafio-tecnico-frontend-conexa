import { FunctionComponent } from 'react';
import { ButtonFooterFixed, WaitingRoomContainer } from './styles';
import { useAuth } from '../../hooks/useAuth';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from '../Button';

export const WaitingRoomInform: FunctionComponent = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const haveToken = localStorage.getItem('@conexa:token');
  function returnAttendances() {
    navigate('/Attendances');
  }
  return (
    <>
      {haveToken ? (
        <>
          <WaitingRoomContainer>
            <h4>Olá, {user}, Sua consulta já vai começar</h4>
            <ButtonFooterFixed>
              <Button onClick={returnAttendances}>Voltar</Button>
            </ButtonFooterFixed>
          </WaitingRoomContainer>
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

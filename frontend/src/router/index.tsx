import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import AttendancesPage from '../Pages/Attendances';
import { LoginPage } from '../Pages/Login';
import WaitingRoom from '../Pages/WaitingRoom';

const Direction: FC = props => {
  return (
    <Routes {...props}>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/attendances">
        <Route index element={<AttendancesPage />} />
      </Route>
      <Route path="/attendances/waitingroom">
        <Route index element={<WaitingRoom />} />
      </Route>
    </Routes>
  );
};

export default Direction;

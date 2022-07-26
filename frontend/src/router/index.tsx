import { FunctionComponent } from 'react';
import { Routes, Route } from 'react-router-dom';
import AttendancesPage from '../pages/Attendances';
import { LoginPage } from '../pages/Login';
import WaitingRoom from '../pages/WaitingRoom';
import PrivateRoute from './PrivateRoute';

const Direction: FunctionComponent = props => {
  return (
    <Routes {...PrivateRoute}>
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

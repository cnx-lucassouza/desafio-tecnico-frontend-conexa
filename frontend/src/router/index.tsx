import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import MyLoader from "../Components/Loading";
import { LoginPage } from "../Pages/Login";
import loadable from "@loadable/component";
import WaitingRoom from "../Pages/WaitingRoom";
const AttendancesPage = loadable(() => import("../Pages/Attendances"), {
  fallback: <MyLoader />,
});

const Direction: FC = (props) => {
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

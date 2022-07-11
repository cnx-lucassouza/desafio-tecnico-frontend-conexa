import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Attendances } from "./Pages/Attendances";
import { LoginForm } from "./Pages/LoginForm";

const Direction: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />}></Route>
      <Route path="/teste">
        <Route index element={<Attendances />} />
      </Route>
    </Routes>
  );
};

export default Direction;

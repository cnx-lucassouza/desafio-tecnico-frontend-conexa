import { LoginForm } from "../../Components/LoginForm";
import { Header } from "../../Components/Header";
import signinBg from "../../assets/signin-bg.svg";
import { Navigate } from "react-router-dom";
import {
  LoginContainer,
  LoginFormWrapper,
  LoginTitleWrapper,
} from "./styles";

export const LoginPage = () => {
  const haveToken = localStorage.getItem("@conexa:token");
  return haveToken ? (
    <Navigate to="/attendances" />
  ) : (
    <>
      <Header />
      <LoginContainer>
        <LoginTitleWrapper>
          <h1>Faça Login</h1>
          <img src={signinBg} alt="Faça login" />
        </LoginTitleWrapper>
        <LoginFormWrapper>
          <LoginForm />
        </LoginFormWrapper>
      </LoginContainer>
    </>
  );
};

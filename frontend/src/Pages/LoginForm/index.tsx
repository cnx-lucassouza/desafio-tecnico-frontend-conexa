import { SignInForm } from "../../Components/LoginForm";
import { Header } from "../../Components/Header";
import {
  SignInContainer,
  SignInFormWrapper,
  SignInTitleWrapper,
} from "./styles";
import signinBg from "../../assets/signin-bg.svg";

export const LoginForm = ({}) => {
  return (
    <>
      <Header/>
      <SignInContainer>
        <SignInTitleWrapper>
          <h1>Faça Login</h1>
          <img src={signinBg} alt="Faça login" />
        </SignInTitleWrapper>
        <SignInFormWrapper>
          <SignInForm />
        </SignInFormWrapper>
      </SignInContainer>
    </>
  );
};

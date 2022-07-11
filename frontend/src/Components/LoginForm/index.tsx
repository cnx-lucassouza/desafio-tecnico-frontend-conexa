import { FC } from "react";
import { Input } from "../Input";
import Button from "../Button";
import { SignInFormContainer } from "./styles";
import React from "react";

const SignInForm: FC = () => {
  const handleSubmit = React.useCallback(() => {
    console.log("Enviou");
  }, []);
  return (
    <>
      <SignInFormContainer ref={null} onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          label="E-mail"
          placeholder="Digite seu e-mail"
        />
        <Input
          type="password"
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
        />
        <Button>Entrar</Button>
      </SignInFormContainer>
    </>
  );
};

export { SignInForm };

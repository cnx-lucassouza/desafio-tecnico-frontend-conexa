import { FunctionComponent, useRef, useCallback } from "react";
import * as Yup from "yup";
import { Input } from "../Input";
import { FormHandles } from "@unform/core";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { SignInFormContainer } from "./styles";
import getValidationErrors from "../../utils/getValidationErrors";
import { useAuth } from "../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import { loginDetails } from "../../hooks/useAuth/types";

const LoginForm: FunctionComponent = () => {
  const formRef = useRef<FormHandles>(null);
  const { login } = useAuth();
  const navigate = useNavigate();

 const handleSubmit = useCallback(
    async (data: loginDetails) => {
      try {
        formRef.current?.setErrors({});

        const validationSchema = Yup.object().shape({
          email: Yup.string()
            .required("E-mail obrigatório")
            .email("Digite um e-mail válido"),
          password: Yup.string().required("Senha obrigatória"),
        });

        await validationSchema.validate(data, {
          abortEarly: false,
        });

        await login(data);

        navigate("/attendances");
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        toast.error("Usuário ou senha inválido", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    },
    [login, navigate]
  );

  return (
    <>
      <SignInFormContainer data-testid="pure_loginForm" ref={formRef} onSubmit={handleSubmit}>
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
        <Button type="submit">
          Entrar
        </Button>
      </SignInFormContainer>

      <ToastContainer />
    </>
  );
};

export { LoginForm };

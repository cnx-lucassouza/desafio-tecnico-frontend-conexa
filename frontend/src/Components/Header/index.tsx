import React from "react";
import { FC } from "react";
import logoImg from "../../assets/logo-conexa.svg";
import Button from "../Button";

import { HeaderContainer, HeaderObject, HeaderText } from "./styles";

const Header: FC = ({}) => {
  const loggingOut = React.useCallback(() => {
    console.log("Saindo");
  }, []);
  return (
    <HeaderContainer>
      <HeaderObject>
        <img src={logoImg} alt="Logo Conexa" />
        <HeaderText>
          <p>Olá, Dr. Lucas</p>
          <Button onClick={loggingOut}>Sair</Button>
        </HeaderText>
      </HeaderObject>
    </HeaderContainer>
  );
};

export { Header };

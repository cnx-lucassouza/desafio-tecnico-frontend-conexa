import React from "react";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo-conexa.svg";
import { useAuth } from "../../hooks";
import { ButtonStroke } from "../ButtonStroke";

import { HeaderContainer, HeaderObject, HeaderText } from "./styles";
import { HeaderProps } from "./types";

export const Header: FunctionComponent<HeaderProps> = ({ onOpenLogoutModal }) => {
  const { user } = useAuth();
  const haveToken = localStorage.getItem("@conexa:token");
  return (
    <HeaderContainer>
      <HeaderObject>
        <Link to="/">
          <img src={logoImg} alt="Logo Conexa" />
        </Link>
        {haveToken ? (
          <HeaderText>
            <p>Olá, Dr. {user}</p>
            <ButtonStroke onClick={onOpenLogoutModal}>Sair</ButtonStroke>
          </HeaderText>
        ) : null}
      </HeaderObject>
    </HeaderContainer>
  );
};

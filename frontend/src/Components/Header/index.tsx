import React from "react";
import { FC } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo-conexa.svg";
import { useAuth } from "../../Hooks";
import { Button } from "../Button";

import { HeaderContainer, HeaderObject, HeaderText } from "./styles";
import { HeaderProps } from "./types";

export const Header: FC<HeaderProps> = ({ onOpenSignOutModal }) => {
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
            <Button onClick={onOpenSignOutModal}>Sair</Button>
          </HeaderText>
        ) : null}
      </HeaderObject>
    </HeaderContainer>
  );
};

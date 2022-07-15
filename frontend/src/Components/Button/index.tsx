import React from "react";
import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

export const Button: React.FC<IButtonProps> = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

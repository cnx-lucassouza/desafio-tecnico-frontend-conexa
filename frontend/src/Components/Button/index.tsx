import React from "react";
import { ButtonContainer, ButtonStyles } from "./styles";
import { IButtonProps } from "./types";



const Button: React.FC<IButtonProps> = ({ onClick, children, ...props }) => {
  return (
    <ButtonContainer>
      <ButtonStyles {...props} onClick={onClick}>
        {children}
      </ButtonStyles>
    </ButtonContainer>
  );
};

export default Button;

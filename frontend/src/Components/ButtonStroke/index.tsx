import { FC } from "react";

import { ButtonContainer } from "./styles";
import { ButtonStrokeProps } from "./types";

const ButtonStroke: FC<ButtonStrokeProps> = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

export { ButtonStroke };

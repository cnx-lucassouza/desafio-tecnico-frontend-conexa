import { FunctionComponent } from "react";

import { ButtonContainer } from "./styles";
import { ButtonStrokeProps } from "./types";

const ButtonStroke: FunctionComponent<ButtonStrokeProps> = ({ children, ...props }) => {
  return <ButtonContainer {...props} data-testid="pure_button">{children}</ButtonContainer>;
};

export { ButtonStroke };

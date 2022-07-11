import { FC, useRef } from "react";
import { InputContainer } from "./styles";
import InputProps from "./types";

const Input: FC<InputProps> = ({
  type = "text",
  name,
  label,
  ...props
}) => {
  const inputRef = useRef(null);

  return (
    <InputContainer>
      <p>{label}</p>
      <input ref={inputRef} {...props} />
    </InputContainer>
  );
};

export { Input };

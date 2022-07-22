import { FC, useRef, useEffect } from "react";
import { useField } from "@unform/core";
import { ErrorMessage } from "../ErrorMessage";
import { SelectContainer } from "./styles";
import { SelectProps } from "./types";

const Select: FC<SelectProps> = ({ name, label, children, ...rest }) => {
  const selectRef = useRef(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      ref: selectRef,
      name: fieldName,
      getValue: (ref) => {
        return ref.current?.value;
      },
      setValue: (ref, newValue) => {
        ref.current.value = newValue;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <SelectContainer data-testid="pure_select">
      <label htmlFor={fieldName}>{label}</label>

      <select
        id={fieldName}
        ref={selectRef}
        defaultValue={defaultValue}
        {...rest}
      >
        {children}
      </select>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </SelectContainer>
  );
};

export { Select };

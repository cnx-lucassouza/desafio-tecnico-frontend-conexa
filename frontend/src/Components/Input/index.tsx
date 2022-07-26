import { FunctionComponent, useCallback, useEffect, useRef, useState } from 'react';
import {
  InputContainer,
  InputWrapper,
  LabelContainer,
  Tooltip,
  TooltipText,
} from './styles';
import InputProps from './types';
import { FiEye, FiEyeOff, FiHelpCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

const Input: FunctionComponent<InputProps> = ({
  type = 'text',
  name,
  label,
  tooltip,
  ...props
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);
  const [isShowingContent, setIsShowingContent] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  const toggleShowContent = useCallback(() => {
    setIsShowingContent(!isShowingContent);
  }, [isShowingContent]);

  return (
    <InputContainer>
      <LabelContainer htmlFor={fieldName}>
        {tooltip ? (
          <Tooltip>
            <FiHelpCircle />
            <TooltipText>{tooltip}</TooltipText>
          </Tooltip>
        ) : null}
      </LabelContainer>
      <InputWrapper>
        <p>{label}</p>
        <input
          type={isShowingContent ? 'text' : type}
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          {...props}
        />
        {type === 'password' ? (
          <button type="button" onClick={toggleShowContent}>
            {isShowingContent ? <FiEye /> : <FiEyeOff />}
          </button>
        ) : null}
      </InputWrapper>
    </InputContainer>
  );
};

export { Input };

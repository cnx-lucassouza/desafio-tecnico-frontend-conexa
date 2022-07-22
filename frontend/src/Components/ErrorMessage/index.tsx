import { FC, ReactNode } from 'react';

import { ErrorMessageContainer } from './styles';
import { ErrorMessageProps } from './types';

const ErrorMessage: FC<ErrorMessageProps> = ({ children }) => {
  return (
    <ErrorMessageContainer data-testid="pure_errorMessage">
      {children}
    </ErrorMessageContainer>
  );
};

export { ErrorMessage };

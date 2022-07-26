import { FunctionComponent } from 'react';

import { ErrorMessageContainer } from './styles';
import { ErrorMessageProps } from './types';

const ErrorMessage: FunctionComponent<ErrorMessageProps> = ({ children }) => {
  return (
    <ErrorMessageContainer data-testid="pure_errorMessage">
      {children}
    </ErrorMessageContainer>
  );
};

export { ErrorMessage };

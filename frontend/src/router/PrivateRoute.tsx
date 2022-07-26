import { useAuth } from '../hooks/useAuth/index';
import { FunctionComponent, useCallback } from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';

interface IPrivateRouteProps extends RouteProps {}

const PrivateRoute: FunctionComponent<IPrivateRouteProps> = ({
  children,
  element: Component,
  ...rest
}) => {
  const { token, user, logout } = useAuth();

  const authenticated = useCallback(() => {
    if (user && token) {
      return true;
    }
    logout();
    return false;
  }, [user, token, logout]);

  return (
    <Route {...rest}>{authenticated() ? Component : <Navigate to="/" />}</Route>
  );
};

export default PrivateRoute;

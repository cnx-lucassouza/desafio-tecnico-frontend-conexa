import { createContext, FunctionComponent, useCallback, useContext, useState } from "react";
import api from "../../Services/api";
import {
  AuthContextData,
  AuthProviderProps,
  AuthState,
  loginDetails,
} from "./types";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@conexa:token");
    const name = localStorage.getItem("@conexa:name");

    if (token && name) {
      return { token, name };
    }

    return {} as AuthState;
  });

  const login = useCallback(async ({ email, password }: loginDetails) => {
    const response = await api.post("/login", {
      email,
      password,
    });

    const { token, name } = response.data;

    localStorage.setItem("@conexa:token", token);
    localStorage.setItem("@conexa:name", name);

    setData({ token, name });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("@conexa:token");
    localStorage.removeItem("@conexa:name");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.name, token: data.token, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

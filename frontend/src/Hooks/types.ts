import { ReactNode } from "react";

export interface loginDetails {
  email: string;
  password: string;
}

export interface AuthContextData {
  user: string;
  token: string;
  login(credentials: loginDetails): Promise<void>;
  logout(): void;
}
export interface AuthState {
  name: string;
  token: string;
}
export interface AuthProviderProps {
  children: ReactNode;
}

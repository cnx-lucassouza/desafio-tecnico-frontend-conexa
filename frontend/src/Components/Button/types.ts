import { ReactNode, ButtonHTMLAttributes } from "react";
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: any;
}

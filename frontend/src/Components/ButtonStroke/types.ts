import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonStrokeProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

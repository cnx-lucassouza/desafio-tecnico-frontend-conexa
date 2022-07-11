export interface IButtonProps {
  children?: React.ReactNode;
  props?: any;
  onClick?: any;
}
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant: '';
  }
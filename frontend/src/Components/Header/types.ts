export const isMobileHeader = ({}) => {
  return 'space-between' && 'center';
};

export interface HeaderProps {
  onOpenLogoutModal?(): void;
}

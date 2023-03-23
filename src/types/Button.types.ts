export interface ButtonProps {
  color?: 'default' | 'success' | 'danger';
  link?: string;
  size?: 'md' | 'lg';
  display?: 'block' | 'inline-block';
  text?: string;
  onClickHandler: () => void;
  isDisabled?: boolean;
}

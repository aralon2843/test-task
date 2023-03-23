import { ButtonProps } from '@/types/Button.types';
import clsx from 'clsx';
import styles from '@/components/UI/Button/Button.module.css';

const BaseButton: React.FC<Omit<ButtonProps, 'link'>> = ({
  color = 'default',
  size = 'md',
  display = 'block',
  text,
  onClickHandler,
  isDisabled,
}): JSX.Element => {
  return (
    <button
      className={clsx(styles.button, {
        [styles[color]]: color,
        [styles[size]]: size,
        [styles[display]]: display,
      })}
      onClick={onClickHandler}
      disabled={isDisabled}
    >
      {text && text}
    </button>
  );
};

export const Button: React.FC<ButtonProps> = ({
  color,
  link,
  size,
  display,
  text,
  onClickHandler,
  isDisabled,
}) => {
  return link ? (
    <a href={link}>
      <BaseButton
        color={color}
        size={size}
        display={display}
        text={text}
        onClickHandler={onClickHandler}
        isDisabled={isDisabled}
      />
    </a>
  ) : (
    <BaseButton
      color={color}
      size={size}
      display={display}
      text={text}
      onClickHandler={onClickHandler}
      isDisabled={isDisabled}
    />
  );
};

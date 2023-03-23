import { ContainerProps } from '@/types/Container.types';
import styles from '@/components/Layout/Container/Container.module.css';

export const Container: React.FC<ContainerProps> = ({
  children,
}): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

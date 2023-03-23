import { BadgeProps } from '@/types/Badge.types';
import styles from '@/components/UI/Badge/Badge.module.css';

export const Badge: React.FC<BadgeProps> = ({ text }): JSX.Element => {
  return <span className={styles.wrapper}>{text}</span>;
};

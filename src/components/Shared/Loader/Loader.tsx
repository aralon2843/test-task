import styles from '@/components/Shared/Loader/Loader.module.css';
import loader from '@/assets/loader.gif';
import Image from 'next/image';

const Loader: React.FC = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Image src={loader} alt="Loading..." />
    </div>
  );
};

export default Loader;

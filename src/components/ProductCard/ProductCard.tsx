import { ProductCardProps } from '@/types/ProductCard.types';
import styles from '@/components/ProductCard/ProductCard.module.css';
import Image from 'next/image';
import { Badge } from '../UI/Badge/Badge';
import { cutString } from '@/helpers/cutString';

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
}): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.image}
        src={product.image}
        alt={`${product.title} image`}
        height={220}
        width={220}
      />
      <h3 className={styles.title}>{cutString(product.title, 30)}</h3>
      <Badge text={product.badge || 'new'} />

      <span className={styles.brand}>{product.brandName || 'Some Brand'}</span>
    </div>
  );
};

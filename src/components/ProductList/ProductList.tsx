import { ProductListProps } from '@/types/ProductList.types';
import styles from '@/components/ProductList/ProductList.module.css';
import { ProductCard } from '../ProductCard/ProductCard';

export const ProductList: React.FC<ProductListProps> = ({
  list,
}): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      {list?.map(product => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

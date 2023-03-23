import styles from '@/components/Pagination/Pagination.module.css';
import { PaginationProps } from '@/types/Pagination.types';
import { Button } from '../UI/Button/Button';

export const Pagination: React.FC<PaginationProps> = ({
  onPrevClickHandler,
  onNextClickHandler,
  productLength,
  page,
  limit,
}): JSX.Element => {
  const firstPage = 1;
  const lastPage = productLength ? Math.floor(productLength / limit) : null;

  return (
    <div className={styles.wrapper}>
      <Button
        text="Previous"
        onClickHandler={onPrevClickHandler}
        isDisabled={page === firstPage}
      />
      <span>Page {page}</span>
      <Button
        text="Next"
        onClickHandler={onNextClickHandler}
        isDisabled={page === lastPage}
      />
    </div>
  );
};

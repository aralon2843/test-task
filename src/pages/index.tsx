import Head from 'next/head';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import { Product } from '@/types/Product.types';
import { getProducts } from '@/services/Product.service';
import { ProductList } from '@/components/ProductList/ProductList';
import { Pagination } from '@/components/Pagination/Pagination';
import { Container } from '@/components/Layout/Container/Container';
import { LIMIT } from '@/constants/limit';
import Loader from '@/components/Shared/Loader/Loader';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [products, setProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [page, setPage] = useState<number>(1);

  const indexOfLastProduct = page * LIMIT;
  const indexOfFirstProduct = indexOfLastProduct - LIMIT;

  const currentProducts = products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await getProducts();
      setProducts([...data, ...data]); // удваиваю количество товаров, чтобы пагинация была более явная, т.к сервер отдает всего 20 товаров
      setIsLoading(false);
    };

    getData();
  }, []);

  const onNextClickHandler = () => {
    setPage(page + 1);
  };

  const onPrevClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <>
      <Head>
        <title>Product shop</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {isLoading ? (
        <Loader />
      ) : (
        <main className={inter.className}>
          <Container>
            <ProductList list={currentProducts} />
            <Pagination
              onNextClickHandler={onNextClickHandler}
              onPrevClickHandler={onPrevClickHandler}
              productLength={products?.length}
              page={page}
              limit={LIMIT}
            />
          </Container>
        </main>
      )}
    </>
  );
}

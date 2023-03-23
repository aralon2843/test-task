import { PRODUCT_API_URL } from '@/constants/URLs';
import { Product } from '@/types/Product.types';

export const getProducts = async (): Promise<Product[]> => {
  const url = PRODUCT_API_URL;
  const products = await fetch(url);
  return products.json();
};

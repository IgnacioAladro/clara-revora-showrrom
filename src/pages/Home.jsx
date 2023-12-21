import { useEffect } from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

import { useGetProducts } from "../hooks/useProducts";



export const Home = () => {

  useEffect(() => {
    document.title = "Clara Revora Showroom - NEW IN";
  });

  const { productsData } = useGetProducts(15);

  return (

    <div>
      <ItemListContainer productsData={productsData} />
    </div>

  );
};

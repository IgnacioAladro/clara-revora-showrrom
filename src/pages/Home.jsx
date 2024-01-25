import { useEffect } from 'react';
import { useGetProducts } from "../hooks/useProducts";

import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import FooterComponent from '../components/FooterComponent/FooterComponent';



export const Home = () => {
  useEffect(() => {document.title = "Clara Revora Showroom - NEW IN"});

  const { productsData } = useGetProducts('products');

  return (
    <div>
      <ItemListContainer productsData={productsData} />
      <FooterComponent />
    </div>
  );
};

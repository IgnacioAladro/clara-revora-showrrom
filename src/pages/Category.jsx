import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { useParams } from 'react-router-dom';
import { useGetProductByCategory } from '../hooks/useProducts';
import { useEffect } from 'react';


export const Category = () => {
    const { id } = useParams();
    const { productsData } = useGetProductByCategory(id);

    useEffect(() => {
        document.title = "Mi Tienda - " + id;
    });
    return (
        <ItemListContainer productsData={productsData} />
    );
};
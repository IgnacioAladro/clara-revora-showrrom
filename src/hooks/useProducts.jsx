import { useEffect, useState } from "react";
import { collection, getDocs, doc, getDoc, getFirestore, query, where } from "firebase/firestore";


export const useGetProducts = (collectionName = 'products') => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection (db, collectionName);
    getDocs(productsCollection).then((snapshot) => {
      setProductsData(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
    });
  }, []);
  return { productsData };
};


export const useGetProductById = (collectionName = "products", id) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => { 
    const db = getFirestore();
    const docRef = doc(db, collectionName, id);
    getDoc(docRef).then((doc) => {
      setProductData({ id: doc.id, ...doc.data() })
    });
  }, [id]);
  return { productData };
};

export const useGetCategories = (collectionName = 'categories') => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, collectionName);
    getDocs(productsCollection).then((snapshot) => {
      const categories = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setCategories(
        categories[0].categories
      );
    });
  }, []);
  return { categories };
};

export const useGetProductByCategory = (category) => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      const db = getFirestore();
      const productsCollection = collection(db, 'products');
      const categoryQuery = query(productsCollection, where('category', '==', category));

      try {
        const snapshot = await getDocs(categoryQuery);
        const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProductsData(products);
        setLoading(false);
      } catch (error) {
        console.error('Error trayendo las categorias', error);
        setLoading(false);
      }
    };

    fetchProductsByCategory();
  }, [category]);

  return { productsData, loading };
};
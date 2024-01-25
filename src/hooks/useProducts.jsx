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
      const q = query(productsCollection, where('category', '==', category));

      try {
        const snapshot = await getDocs(q);
        const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProductsData(products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products by category:', error);
        setLoading(false);
      }
    };

    fetchProductsByCategory();
  }, [category]);

  return { productsData, loading };
};





/* export const useGetProductByCategory = (category) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => { 
    getProductByCategory(category) 
      .then((response) => { 
        setProductsData(response.data.products)
      })
      .catch(error => {
        console.error(error)
      })
  }, [category]);
  return { productsData };
}; */

/* export const useGetProductByCategory = (collectionName = 'products') => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, collectionName)

    getDocs(productsCollection).then((snapshot) => {
      const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setProductsData(products)
    })
  })

  return (productsData);
}; */
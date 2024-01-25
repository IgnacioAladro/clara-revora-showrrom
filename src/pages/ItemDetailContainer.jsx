import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useGetProductById } from '../hooks/useProducts';
import ItemCount from '../components/ItemCountComponent/ItemCount';
import FooterComponent from '../components/FooterComponent/FooterComponent';
import './ItemDetailContainer.css'


export const ItemDetailContainer = () => {
  const { id } = useParams();
  const { productData } = useGetProductById("products", id);

  useEffect(() => {document.title = "Clara Revora Showroom - " + productData.title});

  return (
    <div className='mi-item-detail-container'>
      <Card key={productData.id}>
          <Card.Img variant="top" src={productData.thumbnail} />
          <Card.Body>
              <Card.Title>{productData.title}</Card.Title>
              <Card.Text>{productData.description}</Card.Text>
              <div>{productData.price}</div>
              <ItemCount productId={productData.id} />
              <Button variant="secondary" style={{ margin: '1rem' }}>Añadir a deseados</Button>
          </Card.Body>
      </Card>
      <FooterComponent />
    </div>
  );
};
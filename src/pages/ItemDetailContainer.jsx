import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useEffect } from 'react';
import { useGetProductById } from '../hooks/useProducts';
import { useParams } from 'react-router-dom';

import ItemCount from '../components/ItemCountComponent/ItemCount';


export const ItemDetailContainer = () => {
  const { id } = useParams();
  const { productData } = useGetProductById("products", id);

  useEffect(() => {document.title = "Clara Revora Showroom - " + productData.title});

  return (
    <div style={{ textAlign: 'center' }}>
      <Card key={productData.id} style={{ width: '40rem', margin: 10 }}>
          <Card.Img variant="top" src={productData.thumbnail} />
          <Card.Body>
              <Card.Title>{productData.title}</Card.Title>
              <Card.Text>{productData.description}</Card.Text>
              <div>{productData.price}</div>
              <ItemCount productId={productData.id} />
              <Button variant="primary" style={{ margin: 20 }}>Añadir al carrito</Button>
              <Button variant="primary">Añadir a deseados</Button>
          </Card.Body>
      </Card>
    </div>
  );
};
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';

const ItemListContainer = ({ productsData }) => { 

  return (

    <div style={{width: '100vw', height: '100vh', display: 'flex', flexWrap: 'wrap'}}>

      {
        productsData.map(product => {

          return (

            <Card key={product.id} style={{ width: '18rem', margin: 10 }}>
              <Link to={`/item/${product.id}`}><Card.Img variant="top" src={product.thumbnail} /></Link>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <div>{product.price}</div>
                <Button variant="primary">Añadir al Carrito</Button>
              </Card.Body>
            </Card>
          )
        })
      }
    </div>
  );
};

export default ItemListContainer;
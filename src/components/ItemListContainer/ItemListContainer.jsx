import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { LoadingComponent } from '../LoaderComponent/LoadingComponent';

import { Link } from 'react-router-dom';


const ItemListContainer = ({ productsData }) => { 

  return (
    <div style={{width: '100vw', height: '100vh', display: 'flex', flexWrap: 'wrap'}}>
      {productsData && productsData.length > 0 ? (
        productsData.map(product => (
          <Card key={product.id} style={{ width: '18rem', margin: 10 }}>
            <Link to={`/item/${product.id}`}>
              <Card.Img variant="top" src={product.thumbnail} />
            </Link>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <div>{product.price}</div>
              <Link to={`/item/${product.id}`}>
                <Button variant="primary">Mas info</Button>
              </Link>
            </Card.Body>
          </Card>
        ))
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
};

export default ItemListContainer;
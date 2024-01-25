import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext.jsx";

const ItemCount = ({productId}) => {
    const [ countItem, setCountItem ] = useState(0);
    const { addItemToCart } = useCartContext();

    const handleAdd = () => {
        setCountItem(countItem + 1);
    }; 

    const handleRemove = () => {
        if (countItem > 0) {
            setCountItem(countItem - 1);
        }
    };

    const handleAddProductToCart = () => { 
        if (countItem > 0) {
            addItemToCart(productId, countItem);
            setCountItem(0); // Restablece el contador a 0 después de agregar el producto al carrito
        }
    };

    return (
        <div style={{  }}>
            <div style={{ 
                width: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                margin: 'auto' 
            }}>
                <Button onClick={handleRemove}>-</Button>
                <span>{countItem}</span>
                <Button onClick={handleAdd}>+</Button>
                <Button onClick={handleAddProductToCart}>Añadir al Carrito</Button>
            </div>
        </div>
    );
};

export default ItemCount;
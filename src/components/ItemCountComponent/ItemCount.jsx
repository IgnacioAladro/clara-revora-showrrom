import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context/CartContext.jsx";



const ItemCount = ({productId}) => {
    const [ countItem, setCountItem ] = useState(0);
    const { count, setCount } = useContext(CartContext);

    const handleAdd = () => {
        setCountItem(countItem + 1);
    }; 

    const handleRemove = () => {
        setCountItem(countItem - 1);
    };

    const handleAddProductToCart = () => { 
        const newProduct = {
            id: productId,
            quantity: countItem,
        };
        if(count.length === 0) {
            setCount([newProduct])
        } else {
            const newCount = count.map((item) => {
                if (item.id === productId) {
                    return {
                        ...item,
                        quantity: item.quantity + countItem,
                    };
                } else {
                    setCount([...count, newProduct]);
                };
            });
        };
        setCountItem(1);
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
  )
};

export default ItemCount;
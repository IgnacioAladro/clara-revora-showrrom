import { useState } from "react";
import { Button } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext.jsx";
import './ItemCount.css'
import Swal from 'sweetalert2'

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
            setCountItem(0);
            Swal.fire({
                position: "top-end",
                icon: "success",
                showConfirmButton: false,
                timer: 2500
            });
        }
    };

    return (
        <div className="count">
            <Button onClick={handleRemove}>-</Button>
            <span>{countItem}</span>
            <Button onClick={handleAdd}>+</Button>
            <Button onClick={handleAddProductToCart}>Añadir al Carrito</Button>
        </div>
    );
};

export default ItemCount;
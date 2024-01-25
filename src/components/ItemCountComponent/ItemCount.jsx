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
                position: "bottom-end",
                icon: "success",
                showConfirmButton: false,
                timer: 2500,
            });
        }
    };

    return (
        <div className="count">
            <Button variant="secondary" onClick={handleRemove}>-</Button>
            <span>{countItem}</span>
            <Button variant="secondary" onClick={handleAdd}>+</Button>
            <Button variant="secondary" onClick={handleAddProductToCart}>Añadir al Carrito</Button>
        </div>
    );
};

export default ItemCount;
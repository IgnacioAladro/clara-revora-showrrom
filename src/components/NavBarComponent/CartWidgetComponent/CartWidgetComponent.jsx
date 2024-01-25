import { useCartContext } from '../../../context/CartContext';

//------> Iconify
import { Icon } from '@iconify/react';

//------> Styles
import './CartWidgetStyle.css'

const CartWidgetComponent = () => {
  const { cart } = useCartContext();

  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className='cartWidget-style'>
      <Icon icon="mynaui:cart" color="black" width="25" height="25" />
      <span style={{ color:'#000000', fontWeight:'bold', fontSize:'1.1rem' }}>{totalCount}</span>
    </div>
  );
};

export default CartWidgetComponent;
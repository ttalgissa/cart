import React, { useContext } from 'react';
import { HiShoppingCart  } from 'react-icons/hi';
import './CartButton.css';
import AppContext from '../../context/AppContext';

function CartButton() {

  const { cartItems,isCartVisible, setIsCarttVisible } = useContext(AppContext);

  return (
    <button 
      type="button" 
      className="cart__button"
      onClick= {()=> setIsCarttVisible(!isCartVisible)}
    >
      <HiShoppingCart  />
      { cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}
    </button>
  );
}

export default CartButton;

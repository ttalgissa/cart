import React, { useContext } from 'react';
import { BsCartXFill } from 'react-icons/bs';
import './CartItem.css';
import formatCurrency from '../../utils/formatCurrency';
import propTypes from 'prop-types';
import AppContext from '../../context/AppContext';

function CartItem({ data, index }) {

  const { images, title, price} = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleRemoveItem = (indexToRemove) => {
    const updatedItems = cartItems.filter((_, index) => index !== indexToRemove);
  
    setCartItems(updatedItems);
  };

  return(
    <section className="cart-item">
      <img 
        src ={images[0]?.replace(/\w\.jpg/gi, 'W.jpg')} 
        alt="imagem do produto"      
        className="cart-item-image"
      />

      <div className="cart-item-content">
        <h3 className="cart-item-title">
          { title }
        </h3>
        <h3 className="cart-item-price">
          {formatCurrency(price, 'BRL')}
        </h3>
        <button
          type="button"
          className="button__remove-item"
          onClick={ () => handleRemoveItem(index) }
        >
          <BsCartXFill />
        </button>
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.shape({}),
}.isRequired;

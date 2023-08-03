import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import "../../src/css/Cart.css"
import {Button} from '@mui/material';
import { CartSumContext } from '../../src/pages/CartSumContext';



function Cart() {
  const { t } = useTranslation();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart1")) || []);
  const { setCartSum } = useContext(CartSumContext)


  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart1")) || [];
    setCart(storedCart);
  }, []);


  const removeFromCart = (index) => {
    cart.splice(index, 1)
    setCart(cart.slice());
    localStorage.setItem("cart1", JSON.stringify(cart));
    setCartSum(calculateCartSum());
  }

  const decreaseQuantity = (index) => {
    cart[index].quantity--;
    if (cart[index].quantity === 0) {
      removeFromCart(index);
    }
    setCart(cart.slice());
    localStorage.setItem("cart1", JSON.stringify(cart));
    setCartSum(calculateCartSum());
  }

  const increaseQuantity = (index) => {
    cart[index].quantity++;
    setCart(cart.slice());
    localStorage.setItem("cart1", JSON.stringify(cart));
    setCartSum(calculateCartSum());
  }

  const calculateCartSum = () => {
    let sum = 0;
    cart.forEach(element => sum = sum + element.product.price * element.quantity);
    return sum;
  }



  const calculateItems = () => {
    let items = 0;
    cart.forEach((element) => {
      console.log('Element:', element);
      items = items + element.quantity;
      console.log('Items:', items);
    });
    return items;
  };

  const emptyCart = () => {
    setCart([]);
    localStorage.setItem("cart1", JSON.stringify([]));
  };

  const handleCheckout = () => {
    localStorage.setItem('checkoutCart', JSON.stringify(cart));
    window.location.href = '/checkout';
  };

  return (
    <div>

      {cart.map((element, index) => (
        <div className='product' key={index}>
          <img className='button-cart' onClick={() => removeFromCart(index)} src="/delete.png" alt=""></img>
          <Link to={'/product/' + element.product.id}>
            <img className='image' src={element.product.image} alt="" />
          </Link>
          <div className='name'>{t('product-id')} <br />{element.product.id}</div>
          <div className='name'>{element.product.name}</div>
          <div className='name'>{t(element.product.color)}</div>
          <div className='name'>{element.product.size}</div>
          <div className='name'>{element.product.price} €</div>


          <div className='buttons-cart'>
            <img className='button-cart' onClick={() => decreaseQuantity(index)} src="/minus.png" alt=""></img>
            <div className='name'>{element.quantity} pcs</div>
            <img className='button-cart' onClick={() => increaseQuantity(index)} src="/plus.png" alt=""></img>
          </div>

          <div className='price'>{element.product.price * element.quantity} €</div>
        </div>))}
      <br />

      {cart.length !== 0 && <Button className='empty-cart-button' onClick={emptyCart}>{t('empty-cart')}</Button>}

      <div className='cart-info'>

        {calculateItems() === 1 && <div>{t('there-is')} {calculateItems()}{t('item-in-the-cart')}.</div>}
        {calculateItems() >= 2 && <div>{t('there-are')} {calculateItems()} {t('items-in-the-cart')}.</div>}


        {cart.length > 0 &&
          <div>
            <div >{t('total')}: {calculateCartSum()} €.</div>
            <br />
          </div>}

        {cart.length > 0 && <Button variant="outlined"  className="continue-to-checkout" onClick={handleCheckout}>{t('continue')}</Button>}

      </div>

      {cart.length === 0 && <div>{t('shopping-cart-is-empty')}.  <Link to="/shop">{t('add-products')}</Link> <br /> </div>}
    </div>
  )
}

export default Cart
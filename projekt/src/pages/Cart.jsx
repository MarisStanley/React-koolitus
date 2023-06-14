import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import "../../src/css/Cart.css"


// import Payment from '../../components/cart/Payment'
import Button from 'react-bootstrap/esm/Button';



function Cart() {
  const [cart, setCart] = useState([]);
  const { t } = useTranslation();
  
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart1")) || [];
    setCart(storedCart);
  }, []);
  
  


  const removeFromCart = (index) => {
    cart.splice(index, 1)
    setCart(cart.slice());
    localStorage.setItem("cart1", JSON.stringify(cart));

  }

  const decreaseQuantity = (index) => {
    cart[index].quantity--;
    if (cart[index].quantity === 0) {
      removeFromCart(index);
    }
    setCart(cart.slice());
    localStorage.setItem("cart1", JSON.stringify(cart));

  }

  const increaseQuantity = (index) => {

    cart[index].quantity++;
    setCart(cart.slice());
    localStorage.setItem("cart1", JSON.stringify(cart));
  }

  const calculateCartSum = () => {
    let sum = 0;
    cart.forEach(element => sum = sum + element.product.price * element.quantity);
    return sum;
  }

  // const calculateItems = () => {
  //   let items = 0;
  //   cart.forEach(element => items = items + element.quantity)
    
  //   return items;
  // }
 
  const calculateItems = () => {
  let items = 0;
  cart.forEach((element) => {
    console.log('Element:', element); // Check the values of the elements in the cart
    items = items + element.quantity;
    console.log('Items:', items); // Check the value of items after each iteration
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

          <div className='name'>{element.product.color}</div>

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
        
        {cart.length === 1 && <div>{t('there-is')} {cart.length} {t('item-in-the-cart')}.</div>}
        {cart.length >= 2 && <div>{t('there-are')} {calculateItems()} {t('items-in-the-cart')}.</div>}


        {cart.length > 0 &&
          <div>
            <div >{t('total')}: {calculateCartSum()} €.</div>
            <br />
          </div>}
          
          {/* <Link to={{ pathname: '/checkout', search: `?cart=${encodeURIComponent(JSON.stringify(cart))}` }}>
          <Button className='continue-to-checkout'>Continue to checkout</Button>
        </Link> */}
        {cart.length > 0 && <Button className="continue-to-checkout" onClick={handleCheckout}>{t('continue')}</Button>}
       
      </div>


      {cart.length === 0 && <div>{t('shopping-cart-is-empty')}.  <Link to="/shop">{t('add-products')}</Link> <br /> </div>}
    </div>
  )
}

export default Cart
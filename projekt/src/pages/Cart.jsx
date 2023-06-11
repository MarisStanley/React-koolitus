import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useTranslation } from 'react-i18next';
import "../../src/css/Cart.css"

// import Payment from '../../components/cart/Payment'
import Button from 'react-bootstrap/esm/Button';


function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);


  const removeFromCart = (index) => {
    cart.splice(index, 1)
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));

  }

  const decreaseQuantity = (index) => {
    cart[index].quantity--;
    if (cart[index].quantity === 0) {
      removeFromCart(index);
    }
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));

  }

  const increaseQuantity = (index) => {

    cart[index].quantity++;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const calculateCartSum = () => {
    let sum = 0;
    cart.forEach(element => sum = sum + element.product.price * element.quantity);
    return sum;
  }

  const calculateItems = () => {
    let items = 0;
    cart.forEach(element => items = items + element.quantity)
    return items;
  }


  const emptyCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };


  return (
    <div>

      {cart.map((element, index) => (
        <div className='product' key={index}>
          <img className='button-cart' onClick={() => removeFromCart(index)} src="/delete.png" alt=""></img>
          <Link to={'/product/' + element.product.id}>
            <img className='image' src={element.product.image} alt="" />
          </Link>
          <div className='name'>Product ID <br />{element.product.id}</div>

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

      {cart.length !== 0 && <Button className='empty-cart-button' onClick={emptyCart}>Empty cart</Button>}

      <div className='cart-info'>
        {cart.length === 1 && <div>There is {cart.length} item in the cart.</div>}
        {cart.length >= 2 && <div>There are {calculateItems()}  items in the cart.</div>}


        {cart.length > 0 &&
          <div>
            <div >Total: {calculateCartSum()} €.</div>
            <br />
          </div>}
        <Link to={'/checkout/'}>
          <Button className='continue-to-checkout'>Continue to checkout </Button>
        </Link>
      </div>


      {cart.length === 0 && <div>Shopping cart is empty.  <Link to="/shop">Add products</Link> <br /> </div>}
    </div>
  )
}

export default Cart
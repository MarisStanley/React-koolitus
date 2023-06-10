import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
// import { useTranslation } from 'react-i18next';
import "../../src/css/Cart.css"
 import ParcelMachines from '../../src/components/components/ParcelMachines'
// import Payment from '../../components/cart/Payment'
import {useParams} from 'react-router-dom'

function Cart() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const { id } = useParams();

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
    
    
    
      const emptyCart = () => {
        setCart([]);  
        localStorage.setItem("cart", JSON.stringify([])); 
      };
    
   
  return (
    <div>
        
      {cart.map((element, index) => (
      <div className='product' key={index}>
          <img className='image' src={element.product.image} alt="" />
          <div className='name'>{element.product.name}</div>
          <div className='name'>{element.product.color}</div>
          <div className='name'>{element.product.size}</div>
          <div className='price'>{element.product.price} €</div>
          </div> ))}
          <br />
          {cart.length !== 0 && <button onClick={emptyCart}>Empty cart</button>}
        {cart.length === 1 && <div>There is {cart.length} item in the cart.</div>}
      {cart.length >= 2 && <div>There are {cart.length}  items in the cart.</div>}

      {cart.length > 0 &&
        <div>
          <div>Total: {calculateCartSum()} €.</div>
          <br /><br />
          <ParcelMachines/>
          
        </div>}
    </div>
  )
}

export default Cart
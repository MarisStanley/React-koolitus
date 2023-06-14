import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//import cartFromFile from "../../data/cart.json";
import { useTranslation } from 'react-i18next';
//import omnivaFromFile from "../../data/omniva.json"
import styles from "../../css/Cart.module.css"
import ParcelMachines from '../../components/cart/ParcelMachines';
import Payment from '../../components/cart/Payment';
import { useContext } from 'react';
import { CartSumContext } from '../../store/CartSumContext';

function Cart() {
  const { t } = useTranslation();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const { setCartSum } = useContext(CartSumContext)

  //const [cart, setCart] = useState(cartFromFile);

  const removeFromCart = (index) => {
    cart.splice(index, 1)
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum(calculateCartSum());
  }

  const decreaseQuantity = (index) => {
    cart[index].quantity--;
    if (cart[index].quantity === 0) {
      removeFromCart(index);
    }
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum(calculateCartSum());
  }

  const increaseQuantity = (index) => {
    cart[index].quantity++; //muudan
    setCart(cart.slice()); //HTML
    localStorage.setItem("cart", JSON.stringify(cart)); //salvestus
    setCartSum(calculateCartSum());
  }

  const calculateCartSum = () => {
    let sum = 0;
    cart.forEach(element => sum = sum + element.product.price * element.quantity);
    return sum;
  }

  // const emptyCart = () => {
  //   cartFromFile = []
  //   setCart(cartFromFile.slice());

  // }

  const emptyCart = () => {
    setCart([]);  //muudab HTMLi
    localStorage.setItem("cart", JSON.stringify([])); //muudab salvestust
    setCartSum('0.00');
  };


  return (
    <div>
      {cart.length !== 0 && <button onClick={emptyCart}>{t('empty-cart')}</button>}
      {cart.length === 1 && <div>{t('there-is')} {cart.length}  {t('item-in-the-cart')}.</div>}
      {cart.length >= 2 && <div>{t('there-are')} {cart.length}  {t('items-in-the-cart')}.</div>}
      {cart.map((element, index) => (
        <div className={styles.product} key={index}>
          <img className={styles.image} src={element.product.image} alt="" />
          <div className={styles.name}>{element.product.name}</div>
          <div className={styles.price}>{element.product.price} €</div>

          <div className={styles.quantity}>
            <img className={styles.button} onClick={() => decreaseQuantity(index)} src="/minus.png" alt=""></img>
            <div>{element.quantity} pcs</div>
            <img className={styles.button} onClick={() => increaseQuantity(index)} src="/add.png" alt=""></img>
          </div>

          <div className={styles.total}>{element.product.price * element.quantity} €</div>
          {/* <div>{t('remove-item')}</div> */}
          <img className={styles.button} onClick={() => removeFromCart(index)} src="/delete.png" alt=""></img>
        </div>))}
      <br />

      {/* {cart.length > 0 &&
        <div>{t('total')}: {calculateCartSum()} €.
          <select>
             {omnivaFromFile
             .map(pm => <option>{pm.NAME}</option>)}
             </select>
        </div>} */}

      {cart.length > 0 &&
        <div>
          <div>{t('total')}: {calculateCartSum()} €.</div>
          <br /><br />
          <ParcelMachines />
          <Payment sum={calculateCartSum()} />
        </div>}

      {cart.length === 0 && <div>{t('shopping-cart-is-empty')}.  <Link to="/">{t('add-products')}</Link> <br /> <img src="images.jpeg" alt="" /></div>}
      <br /> <br />
    </div>
  )
}

export default Cart
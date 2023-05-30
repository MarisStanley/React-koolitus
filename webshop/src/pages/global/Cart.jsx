import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
//import cartFromFile from "../../data/cart.json";
import { useTranslation } from 'react-i18next';
//import omnivaFromFile from "../../data/omniva.json"
import "../../css/Cart.css"

function Cart() {
  const { t } = useTranslation();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  //const [cart, setCart] = useState(cartFromFile);
  const [parcelMachines, setParchelMachines] = useState([]);
  //input
  const searchedRef = useRef();


  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
    .then(response => response.json())  // kogu tagastus. API päring
    .then(json => setParchelMachines(json))   //võetakse sisu ja pannakse automaati
  }, []);


 

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

    cart[index].quantity++; //muudan
    setCart(cart.slice()); //HTML
    localStorage.setItem("cart", JSON.stringify(cart)); //salvestus
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
  };



  //onChange
  const searchFromPMs = () => {
    const result = parcelMachines.filter(pm =>
      pm.NAME.toLowerCase().replace("õ", "o")
        .includes(searchedRef.current.value.toLowerCase().replace("õ", "o")));
    setParchelMachines(result)

  }


  return (
    <div>
      {cart.length !== 0 && <button onClick={emptyCart}>{t('empty-cart')}</button>}
      {cart.length === 1 && <div>{t('there-is')} {cart.length}  {t('item-in-the-cart')}.</div>}
      {cart.length >= 2 && <div>{t('there-are')} {cart.length}  {t('items-in-the-cart')}.</div>}
      {cart.map((element, index) => (
        <div className='cart-product' key={index}>
          <img className="image" src={element.product.image} alt="" />
          <div className='name'>{element.product.name}</div>
          <div className='price'>{element.product.price} €</div>

          <div className='quantity'>
          <img className='button' onClick={() => decreaseQuantity(index)} src="/minus.png" alt=""></img>
          <div>{element.quantity} pcs</div>
          <img className='button' onClick={() => increaseQuantity(index)}  src="/add.png" alt=""></img>
          </div>
          
          <div className='total'>{element.product.price * element.quantity} €</div>
          {/* <div>{t('remove-item')}</div> */}
          <img className='button' onClick={() => removeFromCart(index)} src="/delete.png" alt=""></img>
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
          <input type="text" ref={searchedRef} onChange={searchFromPMs} /><br />
          <select>
            {parcelMachines
              .filter(pm => pm.ZIP !== "96331")
              .filter(pm => pm.A0_NAME === "EE")
              .map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}
          </select>
        </div>}

      {cart.length === 0 && <div>{t('shopping-cart-is-empty')}.  <Link to="/">{t('add-products')}</Link> <br /> <img src="images.jpeg" alt="" /></div>}
      <br /> <br />
    </div>
  )
}

export default Cart
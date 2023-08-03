import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from "../../css/HomePage.module.css"
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { CartSumContext } from '../../store/CartSumContext';
import {Button} from '@mui/material';


function Product({ product }) {
  const { t } = useTranslation();
  const { cartSum, setCartSum } = useContext(CartSumContext)

  const addToCart = (productClicked) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cartLS.findIndex(element => element.product.id === productClicked.id);
    if (index >= 0) {
      cartLS[index].quantity++;

    } else {
      cartLS.push({ "product": productClicked, "quantity": 1 });

    }
    localStorage.setItem("cart", JSON.stringify(cartLS));
    // setCartSum(cartSum + productClicked.price)
    let sum = 0;
    cartLS.forEach(element => sum = sum + element.product.price * element.quantity);
    setCartSum(sum)


    //setProducts(productsFromFile.slice());
    toast.success('Item added to cart!', {
      position: toast.POSITION.TOP_RIGHT

    })


  }
  return (
    <div className={styles.product}>
      <Link to={'/product/' + product.id}>
        <img src={product.image} alt="" />

        <div className={styles.name}>{product.name}</div>
        <div>{product.price}</div>
      </Link>
      
      <Button variant="text" onClick={() => addToCart(product)}>{t('add-to-cart')}</Button>
    </div>
  )
}

export default Product
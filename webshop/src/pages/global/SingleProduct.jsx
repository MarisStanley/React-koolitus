import React, {useState} from 'react'
import {  useParams } from 'react-router-dom'
import productsFromFile from "../../data/products.json";
import cartFromFile from "../../data/cart.json";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';



function SingleProduct() {
 
  const { id } = useParams();
  const [products, setProducts] = useState(productsFromFile);
  const result = productsFromFile.find((product) => product.id === Number(id));
 
  const addToCart = (products) => {
    cartFromFile.push(products);
    setProducts(productsFromFile.slice());
    toast.success('Item added to cart!', {
      position: toast.POSITION.TOP_RIGHT
    })
  }
    
  

  
  return (
    <div>
      
    <div>ID: {id}</div>
    <div>Name: {result.name}</div>
    <div>Price: {result.price}</div>
    <div>Description: {result.description}</div>
    <img  src={result.image} alt=""  /> 
     <br /> <br />
    <button onClick={() => addToCart(products)}>{t('add-to-cart')}</button>
    <ToastContainer />
 
    </div>
    
  )
}
  






export default SingleProduct
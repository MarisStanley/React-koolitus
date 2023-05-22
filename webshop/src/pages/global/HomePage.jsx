import React, { useState } from 'react'
import productsFromFile from "../../data/products.json";
import "../../css/HomePage.css"
import cartFromFile from "../../data/cart.json";
import { Link } from 'react-router-dom';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function HomePage() {
  const [products, setProducts] = useState(productsFromFile);
  const { t, i18n } = useTranslation();

  

  const addToCart = (product) => {
    cartFromFile.push(product);
    setProducts(productsFromFile.slice());
    toast.success('Item added to cart!', {
      position: toast.POSITION.TOP_RIGHT
    })
    

  }

  const sortAZ = () => {
    products.sort((a,b) => a.name.localeCompare(b.name));
    setProducts(products.slice());

  }
  const sortZA = () => {
    products.sort((a,b) => b.name.localeCompare(a.name));
    setProducts(products.slice());
    
  }
  const sortPriceAsc = () => {
    products.sort((a,b) => a.price - b.price);
    setProducts(products.slice());
    
  }
  const sortPriceDesc = () => {
    products.sort((a,b) => b.price -a.price );
    setProducts(products.slice());
    
  }

  const filterByCategoryTent = ()=> {
    const result = productsFromFile.filter(product => product.category.includes("tent"));
    setProducts(result);
  }

  const filterByCategoryCamping = ()=> {
    const result = productsFromFile.filter(product => product.category.includes("camping"));
    setProducts(result);
  }

  const filterByCategoryMotors = ()=> {
    const result = productsFromFile.filter(product => product.category.includes("motors"));
    setProducts(result);
  }

  const filterByCategoryMotorcycle = ()=> {
    const result = productsFromFile.filter(product => product.category.includes("motorcycle"));
    setProducts(result);
  }

  return (
    <div>
      <br />
      <button onClick={sortAZ}>{t('sortAZ')}</button>
        <button onClick={sortZA}>{t('sortZA')}</button>
        <button onClick={sortPriceAsc}>{t('sortPriceAsc')}</button>
        <button onClick={sortPriceDesc}>{t('sortPriceDesc')}</button>
        <br />
        <button onClick={filterByCategoryTent}>{t('tents')}</button>
        <button onClick={filterByCategoryCamping}>{t('camping-gear')}</button>
        <button onClick={filterByCategoryMotors}>{t('cars')}</button>
        <button onClick={filterByCategoryMotorcycle}>{t('motorcycles')}</button>
      <br /> <br />

      <div className='products'>
      {products.map(product => 
        <div key={product.id} className="product"> 
        <Link to={'/product/'+ product.id}> 
          <img src={product.image} alt="" />
          
          <div className='name'>{product.name}</div>
          <div>{product.price}</div>
          </Link>
          <button onClick={() => addToCart(product)}>{t('add-to-cart')}</button>
        </div> 
        )}
        </div>
        <ToastContainer />
    </div>
  )
}

export default HomePage
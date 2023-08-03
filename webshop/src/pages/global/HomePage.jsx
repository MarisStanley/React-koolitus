import React, { useEffect, useState } from 'react'
// import productsFromFile from "../../data/products.json";
import styles from "../../css/HomePage.module.css"
//import cartFromFile from "../../data/cart.json";

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import config from "../../data/config.json"
import FilterButtons from '../../components/home/FilterButtons';
import SortButtons from '../../components/home/SortButtons';
import Product from '../../components/home/Product';



function HomePage() {
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] =useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {

    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => { 
        setProducts(json || []);
        setDbProducts(json || []);
        setLoading(false) 
      });

    fetch(config.categoriesDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []));
  }, []);



  // const addToCart = (productClicked) => {
  //   const index = cartFromFile.findIndex(element => element.product.id === productClicked.id);
  //   if (index >= 0) {
  //     cartFromFile[index].quantity++;

  //   } else {
  //     cartFromFile.push({"product":productClicked, "quantity": 1});

  //   }

  

  const sortAZ = () => {
    products.sort((a, b) => a.name.localeCompare(b.name));
    setProducts(products.slice());

  }
  const sortZA = () => {
    products.sort((a, b) => b.name.localeCompare(a.name));
    setProducts(products.slice());

  }
  const sortPriceAsc = () => {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());

  }
  const sortPriceDesc = () => {
    products.sort((a, b) => b.price - a.price);
    setProducts(products.slice());

  }

  // const filterByCategoryTent = ()=> {
  //   const result = productsFromFile.filter(product => product.category.includes("tent"));
  //   setProducts(result);
  // }

  // const filterByCategoryCamping = ()=> {
  //   const result = productsFromFile.filter(product => product.category.includes("camping"));
  //   setProducts(result);
  // }

  // const filterByCategoryMotors = ()=> {
  //   const result = productsFromFile.filter(product => product.category.includes("motors"));
  //   setProducts(result);
  // }

  // const filterByCategoryMotorcycle = ()=> {
  //   const result = productsFromFile.filter(product => product.category.includes("motorcycle"));
  //   setProducts(result);
  // }

  // const filterByCategory = (categoryClicked)=> {
  //      const result = productsFromFile.filter(product => product.category.includes(categoryClicked)); // IIcategoryClicked on muutuvas seisundis
  //     setProducts(result);
  //   }

  

  if (loading === true) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <br />
      <SortButtons
      sortAZ={sortAZ}
      sortZA={sortZA}
      sortPriceAsc={sortPriceAsc}
      sortPriceDesc={sortPriceDesc}
      
      />
      <br />
      {/* <button onClick={() => filterByCategory("tent")}>{t('tents')}</button>
        <button onClick={() => filterByCategory("camping")}>{t('camping-gear')}</button>
        <button onClick={() => filterByCategory("motors")}>{t('cars')}</button>
        <button onClick={() => filterByCategory("motorcycle")}>{t('motorcycles')}</button> */}
      <br />
      <FilterButtons 
      dbProducts={dbProducts}
      setProducts={setProducts}
      categories={categories}
      />
      <div className={styles.products}>
        {products.filter(e => e.active === true).map(product => (
         <Product key={product.id} product={product}/>
       ) )}
      </div>
      <ToastContainer />
    </div>
  )
}

export default HomePage
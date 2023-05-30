import React, { useState } from 'react'
import productsFromFile from "../../data/products.json";
import "../../css/HomePage.css"
//import cartFromFile from "../../data/cart.json";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function HomePage() {
  const [products, setProducts] = useState(productsFromFile);
  const { t } = useTranslation();

  

  // const addToCart = (productClicked) => {
  //   const index = cartFromFile.findIndex(element => element.product.id === productClicked.id);
  //   if (index >= 0) {
  //     cartFromFile[index].quantity++;

  //   } else {
  //     cartFromFile.push({"product":productClicked, "quantity": 1});

  //   }

  const addToCart = (productClicked) => {
    const cartLS = JSON.parse(localStorage.getItem("cart"))|| [];
    const index = cartLS.findIndex(element => element.product.id === productClicked.id);
    if (index >= 0) {
      cartLS[index].quantity++;

    } else {
      cartLS.push({"product":productClicked, "quantity": 1});
      
    }
    localStorage.setItem("cart", JSON.stringify(cartLS));

    //setProducts(productsFromFile.slice());
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

  const filterByCategory = (categoryClicked)=> {
       const result = productsFromFile.filter(product => product.category.includes(categoryClicked)); // IIcategoryClicked on muutuvas seisundis
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
        <button onClick={() => filterByCategory("tent")}>{t('tents')}</button>
        <button onClick={() => filterByCategory("camping")}>{t('camping-gear')}</button>
        <button onClick={() => filterByCategory("motors")}>{t('cars')}</button>
        <button onClick={() => filterByCategory("motorcycle")}>{t('motorcycles')}</button>
      <br /> <br />

      <div className='products'>
      {products.filter(e=> e.active === true).map(product => 
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
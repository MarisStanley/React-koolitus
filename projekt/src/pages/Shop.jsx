import React, { useEffect, useState } from 'react'
import config from '../../src/data/config.json'
import "../../src/css/Shop.css"
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Sidebar from '../components/components/Sidebar'

function Shop() {
  const [products, setProducts] = useState([]);
  const { t } = useTranslation();
  const [categories, setCategories] = useState([])
  const [dbProducts, setDbProducts] =useState([])
  

  useEffect(() => {

    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => { 
        setProducts(json || []);
        setDbProducts(json || []);
       
      });

    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []));
  }, []);

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

  
    const filterByCategory = (categoryClicked) => {
        const result = dbProducts.filter(product => product.category.includes(categoryClicked)); 
        setProducts(result);
      }
  

  return (  <div>
   
   <div className='sidebar'>
   <div>
    <button onClick={sortAZ}>{t('sortAZ')}</button>
    <button onClick={sortZA}>{t('sortZA')}</button>
    <button onClick={sortPriceAsc}>{t('sortPriceAsc')}</button>
    <button onClick={sortPriceDesc}>{t('sortPriceDesc')}</button>
  </div>
     
  <div>
  {[...new Set(categories.map(category => category.category))].map(categoryName => (
    <button key={categoryName} onClick={() => filterByCategory(categoryName)}>
      {categoryName}
    </button>
  ))}
</div>
   </div>
   <Sidebar/>
    <div  className='background'>
      <div className='products'>
        {products.map(el =>
          <div key={el.id}>
            <br />
            <Link to={'/product/' + el.id}>
              <img className='purse' src={process.env.PUBLIC_URL + "/" + el.image} alt="" />
            </Link>
            <div>{el.name}</div>
            <div>{el.price}€</div>
            <div>{el.active} </div>


          </div>

        )}
      </div>

    </div>
    </div>
  )
}

export default Shop
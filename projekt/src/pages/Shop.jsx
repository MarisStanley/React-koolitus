import React, { useEffect, useState } from 'react'
import config from '../../src/data/config.json'
import "../../src/css/Shop.css"
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';




function Shop() {
  const [products, setProducts] = useState([]);
  const { t, } = useTranslation();
  const [categories, setCategories] = useState([])
  const [dbProducts, setDbProducts] = useState([])


  useEffect(() => {
    fetch(config.productsDbUrl)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json || []);
        setDbProducts(json || []);
      });

    fetch(config.productsDbUrl)
      .then((res) => res.json())
      .then((json) => setCategories(json || []));
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


  return (<div className='shop' >

    <div >
      <nav className="filter-style">
        <div >
          <Button variant="" className="btn" onClick={sortAZ}>{t('sortAZ')}</Button>
        </div>
        <div >
          <Button variant="" className="btn" onClick={sortZA}>{t('sortZA')}</Button>
        </div>
        <div >
          <Button variant="" className="btn" onClick={sortPriceAsc}>{t('sortPriceAsc')}</Button>
        </div>
        <div >
          <Button variant="" className="btn" onClick={sortPriceDesc}>{t('sortPriceDesc')}</Button>
        </div>
      </nav>
      <hr class="horizontal-line"></hr>
      <div className='buttons-style'>
        {[...new Set(categories.map(category => category.category))].map(categoryName => (
          <Button variant="" key={categoryName} onClick={() => filterByCategory(categoryName)}>
            {categoryName}
          </Button>
        ))}
      </div>
    </div>
    <div className='background'>
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
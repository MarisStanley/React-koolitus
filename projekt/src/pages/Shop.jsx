import React, { useEffect, useState } from 'react'
import config from '../../src/data/config.json'
import "../../src/css/Shop.css"
import { Link } from 'react-router-dom';

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => setProducts(json || []));
  }, []);

  return (
    <div>
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
  )
}

export default Shop
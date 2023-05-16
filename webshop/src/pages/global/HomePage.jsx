import React, { useState } from 'react'
import productsFromFile from "../../data/products.json";
import "../../css/HomePage.css"

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  const addToCart = () => {

  }

  return (
    <div>
      <div className='products'>
      {products.map(product => 
        <div key={product.id} className="product">
          <img src={product.image} alt="" />
          
          <div className='name'>{product.name}</div>
          <div>{product.price}</div>
          
          <button>Add to cart</button>
        </div> 
        )}
        </div>

    </div>
  )
}

export default HomePage
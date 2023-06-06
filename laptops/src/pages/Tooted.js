import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Tooted() {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(json => setProducts(json.products))
        
    }, []);



  return (
    <div>
        {products.map(items => 
        <div>
            <div>{items.id}</div>
            <div>{items.title}</div>
            <div>{items.description}</div>
            <div>{items.price}</div>
            <div>{items.discountPercentage}</div>
            <div>{items.rating}</div>
            <div>{items.stock}</div>
            <div>{items.brand}</div>
            <div>{items.category}</div>
            <img src="{items.thumbnail}" alt="" />
            <div>{items.images}</div>
        </div>  )}
    </div>
  )
}

export default Tooted
import React, { useState } from 'react'
import productsFromFile from "../../data/products.json";
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);

  const deleteProduct = () => {
    
  }

  return (
    <div>
      {products.map(product => 
        <div key={product.id}>
          <img src={product.image} alt="" />
          <div>{product.id}</div>
          <div>{product.image}</div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.description}</div>
          <div>{product.category}</div>
          <div>{product.active}</div>
          <Button variant='danger'>Delete</Button>
          <Button as={Link} to={'/admin/edit-product/'+ product.id} variant='warning'>Edit</Button>
        </div> 
        )}

    </div>
  )
}

export default MaintainProducts
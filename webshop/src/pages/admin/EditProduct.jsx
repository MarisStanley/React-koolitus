import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import productsFromFile from '../../data/products.json';
import { useRef } from 'react';
import Button from 'react-bootstrap/esm/Button';


function EditProduct() {
  const {id} = useParams();
  const found = productsFromFile.find(product => product.id === Number(id));

  const index= productsFromFile.findIndex(product => product.id === Number(id));

  const idRef = useRef()
  const nameRef = useRef()
  const imageRef = useRef()
  const priceRef = useRef()
  const descriptionRef = useRef()
  const categoryRef = useRef()
  const activeRef = useRef()
  const navigate = useNavigate();

  const changeProduct = () => {
    const updatedProduct = {
      "id": Number(idRef.current.value),
      "name": nameRef.current.value,
      "image": imageRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "active": activeRef.current.checked,

    }
    productsFromFile[index] = updatedProduct;
    navigate("/admin/maintain-products");

  }


  return (
    <div>
      {/* <div>Id: {id}</div>
      <div>Toode:{found.name}</div>
      <div>JrkNr:{index}</div> */}
      <label>Id</label> <br />
      <input ref={idRef} type="number" defaultValue={found.id}/>
      <label>Name</label>  <br />
      <input ref={nameRef} type="text" defaultValue={found.name}/>
      <label>Image</label> <br />
      <input ref={imageRef} type="text" defaultValue={found.image}/>
      <label>Price</label> <br />
      <input ref={priceRef} type="number" defaultValue={found.price}/>
      <label>Description</label> <br />
      <input ref={descriptionRef} type="text" defaultValue={found.description}/>
      <label>Category</label> <br />
      <input ref={categoryRef} type="text" defaultValue={found.category}/>
      <label>Active</label> <br />
      <input ref={activeRef} type="checkbox" defaultChecked={found.active}/>
      <Button onClick={changeProduct}>Change</Button>
    </div>
  )
}

export default EditProduct
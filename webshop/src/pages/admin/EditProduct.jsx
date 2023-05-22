import React, { useState } from 'react'
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
  const [idUnique, setIdUnique] = useState(true);

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
//   const checkIdUniqueness = () => {
//     const result = productsFromFile.filter(element => element.id === Number(idRef.current.value));
//     if (result.length === 0) {
       //setIdUnique(true)

//   } else {
//     setIdUnique(false);
//   }

// }

// const checkIdUniqueness = () => {
//   const found = productsFromFile.find(element => element.id === Number(idRef.current.value));
//   if (found === undefined) {
     //setIdUnique(true)

// } else {
//   setIdUnique(false);
// }

// }

     const checkIdUniqueness = () => {
       const index = productsFromFile.find(element => element.id === Number(idRef.current.value));
       if (index === -1) {
       setIdUnique(true)

     } else {
       setIdUnique(false);
   }

}

  return (
    <div> 
      {/* <div>Id: {id}</div>
      <div>Toode:{found.name}</div>
      <div>JrkNr:{index}</div> */}
      {/* <label>Id</label>  */}
      {idUnique === false && <div>Inserted ID is not unique</div>}
      <input onChange={checkIdUniqueness} ref={idRef} type="number" defaultValue={found.id}/> <br />
      {/* <label>Name</label>   */}
      <input ref={nameRef} type="text" defaultValue={found.name}/> <br />
      {/* <label>Image</label>  */}
      <input ref={imageRef} type="text" defaultValue={found.image}/> <br />
      {/* <label>Price</label>  */}
      <input ref={priceRef} type="number" defaultValue={found.price}/> <br />
      {/* <label>Description</label>  */}
      <input ref={descriptionRef} type="text" defaultValue={found.description}/> <br />
      {/* <label>Category</label>  */}
      <input ref={categoryRef} type="text" defaultValue={found.category}/><br />
      {/* <label>Active</label>  */}
      <input ref={activeRef} type="checkbox" defaultChecked={found.active}/><br />
      <Button disabled={idUnique === false} onClick={changeProduct}>Change</Button>
    </div>
  )
}

export default EditProduct
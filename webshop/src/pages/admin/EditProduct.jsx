import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
//import productsFromFile from '../../data/products.json';
import { useRef } from 'react';
import Button from 'react-bootstrap/esm/Button';
import config from "../../data/config.json"


function EditProduct() {
  const {id} = useParams();
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([]);
  const found = products.find(product => product.id === Number(id));
  const index= products.findIndex(product => product.id === Number(id));
  const [categories, setCategories] = useState([])
  

  const idRef = useRef()
  const nameRef = useRef()
  const imageRef = useRef()
  const priceRef = useRef()
  const descriptionRef = useRef()
  const categoryRef = useRef()
  const activeRef = useRef()
  const navigate = useNavigate();
  const [idUnique, setIdUnique] = useState(true);

  useEffect(() => {

    fetch(config.productsDbUrl)
    .then(res => res.json())
    .then(json => { 
      setProducts(json || []);
      setLoading(false) 
    });

    
  }, []);

  useEffect(() => {
    fetch(config.categoriesDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []))
  }, []);

  const changeProduct = () => {
    if (idRef.current.value === "") {
      return;
    }
    if (nameRef.current.value === "") {
      return;
    }
    if (priceRef.current.value === "") {
      return;
    }
    if (Number(priceRef.current.value) <= 0) {
      return;
    }
    const updatedProduct = {
      "id": Number(idRef.current.value),
      "name": nameRef.current.value,
      "image": imageRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "active": activeRef.current.checked,

    }
    products[index] = updatedProduct;
    fetch(config.productsDbUrl, {"method": "PUT", "body": JSON.stringify(products)})
      .then(() => navigate("/admin/maintain-products"))   //siis kui valmis saab, siis navigeeri
    

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
      if (idRef.current.value === id) { //sisestatud id on sama,mis URList id
        setIdUnique(true) // thumbs up
        return; //ära edasi siit mine
      }

       const index = products.find(element => element.id === Number(idRef.current.value));
       if (index === -1) {
       setIdUnique(true)

     } else {
       setIdUnique(false);
   }

}

if (loading === true) {
  return <div>Loading...</div>
}

  return (
    <div> 
      {found !== undefined && 
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
      <select ref={categoryRef} defaultValue={found.category}>
        {categories.map(category => <option>{category.name}</option>  )}
      </select><br />
      {/* <input ref={categoryRef} type="text" defaultValue={found.category}/><br /> */}
      {/* <label>Active</label>  */}
      <input ref={activeRef} type="checkbox" defaultChecked={found.active}/><br />
      <Button disabled={idUnique === false} onClick={changeProduct}>Change</Button>
      </div>}
      {found === undefined && <div>Product not found</div>}
    </div>
  )
}

export default EditProduct
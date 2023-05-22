import React from 'react'
import { useNavigate } from 'react-router-dom'
import productsFromFile from '../../data/products.json';
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { t } from 'i18next';


function AddProduct() {
  
  

  const idRef = useRef()
  const nameRef = useRef()
  const imageRef = useRef()
  const priceRef = useRef()
  const descriptionRef = useRef()
  const categoryRef = useRef()
  const activeRef = useRef()
  const navigate = useNavigate();

  const addProduct = () => {
    const updatedProduct = {
      "id": Number(idRef.current.value),
      "name": nameRef.current.value,
      "image": imageRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "active": activeRef.current.checked,

    }
    productsFromFile.push(updatedProduct);
    toast.success('New item added!', {
      position: toast.POSITION.TOP_RIGHT
    })
    //navigate("/");

  }


  return (
    <div>
      <div>{t('add-new-product')}</div> <br />
      <label>Id</label> <br />
      <input ref={idRef} type="number" /> <br />
      <label>{t('name')}</label> <br />
      <input ref={nameRef} type="text" /> <br />
      <label>{t('photo')}</label> <br />
      <input ref={imageRef} type="text" /> <br />
      <label>{t('price')}</label> <br />
      <input ref={priceRef} type="number"/> <br />
      <label>{t('description')}</label> <br />
      <input ref={descriptionRef} type="text" /> <br />
      <label>{t('category')}</label> <br />
      <input ref={categoryRef} type="text" /><br />
      <label>{t('active')}</label> <br />
      <input ref={activeRef} type="checkbox" /><br />
      
      <Button  onClick={addProduct} >Save</Button>
      <ToastContainer />
    </div>
  )
}

export default AddProduct
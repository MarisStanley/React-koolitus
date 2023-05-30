import productsFromFile from '../../data/products.json';
import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';



function AddProduct() {
  const { t } = useTranslation();
  const [message, setMessage] = useState("Add new product")



  const idRef = useRef()
  const nameRef = useRef()
  const imageRef = useRef()
  const priceRef = useRef()
  const descriptionRef = useRef()
  const categoryRef = useRef()
  const activeRef = useRef()

  // const addProduct = () => {
  //   const updatedProduct = {
  //     "id": Number(idRef.current.value),
  //     "name": nameRef.current.value,
  //     "image": imageRef.current.value,
  //     "price": Number(priceRef.current.value),
  //     "description": descriptionRef.current.value,
  //     "category": categoryRef.current.value,
  //     "active": activeRef.current.checked,

  //   }
  //   productsFromFile.push(updatedProduct);
  //   toast.success('New item added!', {
  //     position: toast.POSITION.TOP_RIGHT
  //   })



  //}
  const add = () => {
    if (idRef.current.value === "") {
      setMessage("Cannot add product without an Id!")
      return;
    }
    if (nameRef.current.value === "") {
      setMessage("Cannot add product without an name!")
      return;
    }
    if (priceRef.current.value === "") {
      setMessage("Cannot add product without an price!")
      return;
    }
    if (Number(priceRef.current.value) <= 0) {
      setMessage("Cannot add product with negative price!")
      return;
    }
    // if (idRef.current.value === "") {
    //   setMessage("Cannot add product without an Id!");
    // } else {
    //   setMessage(idRef.current.value + " product added: ");



      productsFromFile.push(
        {
          "id": Number(idRef.current.value),
          "name": nameRef.current.value,
          "image": imageRef.current.value,
          "price": Number(priceRef.current.value),
          "description": descriptionRef.current.value,
          "category": categoryRef.current.value,
          "active": activeRef.current.checked,
        });
      toast.success("New product added!");
    
  };

  const [idUnique, setIdUnique] = useState(true);

  const CheckIdUniqueness = () => {
    const index = productsFromFile.findIndex(element => element.id === Number(idRef.current.value));
    if (index ===  -1) {
      setIdUnique(true)
      setMessage("")

    } else {
      setIdUnique(false);
      setMessage("Inserted ID is not available")

    }
  }


  return (
    <div>
      <div>{message}</div> <br />
      <label>Id</label> <br />
      <input onChange={CheckIdUniqueness} ref={idRef} type="number" /> <br />
      <label>{t('name')}</label> <br />
      <input ref={nameRef} type="text" /> <br />
      <label>{t('photo')}</label> <br />
      <input ref={imageRef} type="text" /> <br />
      <label>{t('price')}</label> <br />
      <input ref={priceRef} type="number" /> <br />
      <label>{t('description')}</label> <br />
      <input ref={descriptionRef} type="text" /> <br />
      <label>{t('category')}</label> <br />
      <input ref={categoryRef} type="text" /><br />
      <label>{t('active')}</label> <br />
      <input ref={activeRef} type="checkbox" /><br />

      <Button onClick={add} disabled={idUnique === false}>Save</Button>
      <ToastContainer />
    </div>
  )
}


export default AddProduct
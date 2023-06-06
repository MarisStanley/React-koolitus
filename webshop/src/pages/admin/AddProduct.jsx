//import productsFromFile from '../../data/products.json';
import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
import config from "../../data/config.json"



function AddProduct() {
  const { t } = useTranslation();
  const [message, setMessage] = useState("Add new product")
  const [categories, setCategories] = useState([])
  const [idUnique, setIdUnique] = useState(true);

  const idRef = useRef()
  const nameRef = useRef()
  const imageRef = useRef()
  const priceRef = useRef()
  const descriptionRef = useRef()
  const categoryRef = useRef()
  const activeRef = useRef()
  const [products, setProducts] = useState([]);


  useEffect(() => {

    fetch(config.productsDbUrl)
    .then(res => res.json())
    .then(json => setProducts(json || []))


    fetch(config.categoriesDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []))
  }, []);

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

    if(categoryRef.current.value === "") {
      setMessage("You have to choose a category!")
      return;
    }
    // if (idRef.current.value === "") {
    //   setMessage("Cannot add product without an Id!");
    // } else {
    //   setMessage(idRef.current.value + " product added: ");



    products.push(
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

    idRef.current.value = "";
    imageRef.current.value = "";
    nameRef.current.value = "";
    priceRef.current.value = "";
    descriptionRef.current.value = "";
    categoryRef.current.value = "";
    activeRef.current.checked = false;

    fetch(config.productsDbUrl, {"method": "PUT", "body": JSON.stringify(products)})

  };

  

  const CheckIdUniqueness = () => {
    const index = products.findIndex(element => element.id === Number(idRef.current.value));
    if (index === -1) {
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
      <select ref={categoryRef}>
        <option value="">Vali kategooria</option>
        {categories.map(category => <option key={category.name}>{category.name}</option>  )}
      </select><br />
      {/* <input ref={categoryRef} type="text" /><br /> */}
      {/* <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option> */}
      <label>{t('active')}</label> <br />
      <input ref={activeRef} type="checkbox" /><br />

      <Button onClick={add} disabled={idUnique === false}>Save</Button>
      <ToastContainer />
    </div>
  )
}


export default AddProduct
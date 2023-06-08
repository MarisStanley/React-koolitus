import { useParams } from 'react-router-dom'
//import productsFromFile from "../../data/products.json";
//import cartFromFile from "../../data/cart.json";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import config from "../../data/config.json"





function SingleProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const { t } = useTranslation();
  const { id } = useParams();
  //const [products, setProducts] = useState(productsFromFile);
  const result = products.find((product) => product.id === Number(id));


  useEffect(() => {

    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);
        setLoading(false)
      });


  }, []);

  // const addToCart = (productClicked) => {
  //   const index = cartFromFile.findIndex(element => element.product.id === productClicked.id);
  //   if (index >= 0) {
  //     cartFromFile[index].quantity++;

  //   } else {
  //     cartFromFile.push({"product":productClicked, "quantity": 1});

  //   }

  //   //setProducts(productsFromFile.slice());
  //   toast.success('Item added to cart!', {
  //     position: toast.POSITION.TOP_RIGHT
  //   })


  // }

  const addToCart = (productClicked) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cartLS.findIndex(element => element.product.id === productClicked.id);
    if (index >= 0) {
      cartLS[index].quantity++;

    } else {
      cartLS.push({ "product": productClicked, "quantity": 1 });

    }
    localStorage.setItem("cart", JSON.stringify(cartLS));

    //setProducts(productsFromFile.slice());
    toast.success('Item added to cart!', {
      position: toast.POSITION.TOP_RIGHT
    })


  }

  if (loading === true) {
    return <div>Loading...</div>
  }


  return (
    <div>

      <div>ID: {id}</div>
      <div>Name: {result.name}</div>
      <div>Price: {result.price}</div>
      <div>Description: {result.description}</div>
      <img src={result.image} alt="" />
      <br /> <br />
      <button onClick={() => addToCart(result)}>{t('add-to-cart')}</button>
      <ToastContainer />

    </div>

  )
}







export default SingleProduct
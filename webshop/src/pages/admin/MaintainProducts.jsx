import React, { useEffect, useRef, useState } from 'react'
//import productsFromFile from "../../data/products.json";
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import { t } from 'i18next';
import "../../css/MaintainProducts.css";
import config from "../../data/config.json"

function MaintainProducts() {
  const [products, setProducts] = useState([]); //koikuv suurus -> 
  //palju otsingus valja tuleb. Ainult valja naitamiseks. Andmebaasi ei saada.
  const [dbProducts, setDbProducts] =useState([]) //alati sama palju kui andmebaasis.Votan tema seast ara, saadan andmebaasi. Otsing.
  const searchedRef = useRef();
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetch(config.productsDbUrl)
    .then(res => res.json())
    .then(json => { 
      setProducts(json || []);
      setDbProducts(json || []);
      setLoading(false) 
    });

    
  }, []);

  const deleteProduct = (product) => {
    const index = dbProducts.findIndex(element => element.id === product.id);
    dbProducts.splice(index, 1);
    setDbProducts(dbProducts.slice());
    //setProducts(dbProducts.slice());
    searchFromProducts();
    fetch(config.productsDbUrl, {"method": "PUT", "body": JSON.stringify(dbProducts)})

  }

  const searchFromProducts = () => {
    const result = dbProducts.filter(element => 
      element.name.toLowerCase().replace("õ", "o")
      .includes(searchedRef.current.value.toLowerCase().replace("õ", "o")))
    setProducts(result);

  }

  if (loading === true) {
    return <div>Loading...</div>
  }


  return (
    <div>
      <input onChange={searchFromProducts} ref={searchedRef} type="text" />
      <span>{products.length} {t('items')}</span>
      <tbody>
        <table>
          <thead>
            <tr>
              <th>{t('photo')}</th>
              <th>{t('id')}</th>
              <th>{t('name')}</th>
              <th>{t('price')}</th>
              <th>{t('description')}</th>
              <th>{t('category')}</th>
              <th>{t('actions')}</th>
            </tr>
          </thead>
          {products.map((product, index) =>
            <tr key={product.id}  className= { product.active === true ? "active" : "inactive"} >
              <td> <img className={product.active === true ?'image' : "image-blurred"} src={product.image} alt="" /></td>
              <td>{product.id}</td>

              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>


              <td>
                <Button onClick={() => deleteProduct(product)} variant='danger'>{t('delete')}</Button>
                <Button as={Link} to={'/admin/edit-product/' + product.id} variant='warning'>{t('edit')}</Button>
              </td>
            </tr>

          )}
        </table>
      </tbody>

    </div>
  )
}

export default MaintainProducts
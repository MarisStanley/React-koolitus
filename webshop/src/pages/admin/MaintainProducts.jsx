import React, { useRef, useState } from 'react'
import productsFromFile from "../../data/products.json";
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import { t } from 'i18next';
import "../../css/MaintainProducts.css";

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);
  const searchedRef = useRef();

  const deleteProduct = (index) => {
    productsFromFile.splice(index, 1);
    setProducts(productsFromFile.slice());

  }

  const searchFromProducts = () => {
    const result = productsFromFile.filter(element => 
      element.name.includes(searchedRef.current.value))
    setProducts(result);

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
                <Button onClick={() => deleteProduct(index)} variant='danger'>{t('delete')}</Button>
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
import React, { useRef, useState } from 'react'
import productsFromFile from "../../data/products.json";
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import { t } from 'i18next';

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);
  const searchedRef = useRef();

  const deleteProduct = (index) => {
    productsFromFile.splice(index,1);
    setProducts(productsFromFile.slice());
    
  }

  const searchFromProducts = () => {
    const result = productsFromFile.filter(element => element.name.includes(searchedRef.current.value))
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
        {products.map(product => 
          <tr key={product.id}> 
            <td> <img className='image' src={product.image} alt="" /></td>
            <td>{product.id}</td>
            
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td>{product.category}</td>
            
            
            <td>
            <Button onClick={(index) => deleteProduct(index)} variant='danger'>{t('delete')}</Button>
            <Button as={Link} to={'/admin/edit-product/'+ product.id} variant='warning'>{t('edit')}</Button>
            </td>
            </tr>
           
          )}
        </table>
      </tbody>

    </div>
  )
}

export default MaintainProducts
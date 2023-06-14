import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import config from '../../src/data/config.json'
import "../../src/css/Product.css"
import Button from 'react-bootstrap/esm/Button';
import {  useTranslation } from 'react-i18next';

function SingleProduct() {
     const { t } = useTranslation();
    const [products, setProducts] = useState([]);
    const { id } = useParams();
    const result = products.find((el) => el.id === Number(id));

    useEffect(() => {

        fetch(config.productsDbUrl)
            .then(res => res.json())
            .then(json => setProducts(json || []));
    }, []);

    if (!result) {
        return <div> {('product-not-found ')}</div>;
    }

    const addToCart = (productClicked) => {
        const cartLS = JSON.parse(localStorage.getItem("cart1")) || [];
        const index = cartLS.findIndex(element => element.product.id === productClicked.id);
        if (index >= 0) {
            cartLS[index].quantity++;

        } else {
            cartLS.push({ "product": productClicked, "quantity": 1 });

        }
        localStorage.setItem("cart1", JSON.stringify(cartLS));





    }

    const availableSizes = [].concat.apply([], products
        .filter((product) => product.id === result.id)
        .map((product) => product.size));



    const availableColors = products
        .filter((product) => product.id === Number(id))
        .map((product) => product.color);



    return (
        <div className='background'>
            <div className='details'>

                <Link className="link-black" to="/shop">{t('shop')}</Link>

                <div className='product-name'> {result.name}</div>
                <div>{t('product-id')}: {id}</div>

                <div className='product-description'>{result.description}</div>
                <div className='product-price'>{t('price')}:  {result.price}€</div> <br />
                <div className='tables'>
                    <label className='text' htmlFor="">{t('size')}: </label>
                    <select className='select' defaultValue=''> 
                    <option value="">{t('select-size')}</option>
                        {availableSizes.map((size, index) => (
                            <option key={index} value={size} selected={size === result.size}>
                                {size}
                            </option>
                        ))}
                    </select>
                    <br /> <br />
                    <label className='text' htmlFor="">{t('color')}: </label>
                    <select className="select" defaultValue=''>
                    <option value=""> {t('select-color')}  </option>
                        {availableColors.map((color) => (
                            <option key={color} value={color}>
                                {color}
                            </option>
                        ))}
                    </select>
                </div>
                <Button onClick={() => addToCart(result)} variant="secondary" className="add-to-cart-button">{t('add-to-cart')}</Button>
            </div>
            <div className='product-image'>
                <img className='product-img' src={process.env.PUBLIC_URL + "/" + result.image} alt="" /></div>



        </div>
    )
}

export default SingleProduct
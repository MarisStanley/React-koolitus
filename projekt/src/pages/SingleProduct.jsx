import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import config from '../../src/data/config.json'
import "../../src/css/Product.css"
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

function SingleProduct() {
    const { t } = useTranslation();
    const [products, setProducts] = useState([]);
    const { id } = useParams();
    const result = products.find((el) => el.id === Number(id));
    const [size, setSize] = useState('');
    const sizeRef = useRef([]);

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
        const index = cartLS.findIndex(element => element.product.id === productClicked.id && element.product.size === size);

        if (index >= 0) {
            cartLS[index].quantity++;
        } else {
            cartLS.push({ "product": { ...productClicked, size: size }, "quantity": 1 });
        }

        localStorage.setItem("cart1", JSON.stringify(cartLS));
    };



    // const addToCart = (productClicked) => {
    //     const cartLS = JSON.parse(localStorage.getItem("cart1")) || [];
    //     const index = cartLS.findIndex(element => element.product.id === productClicked.id);
    //     if (index >= 0) {
    //         cartLS[index].quantity++;

    //     } else {
    //         cartLS.push({ "product": productClicked, "quantity": 1, "size": sizeRef.current.value });

    //     }
    //     localStorage.setItem("cart1", JSON.stringify(cartLS));
    // }

    const availableSizes = [].concat.apply([], products
        .filter((product) => product.id === result.id)
        .map((product) => product.size));

    if (sizeRef.current.value === "S") {
        products.push({ "size": sizeRef.current.value })
        return;
    }

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
                    <select className='select' value={size} onChange={(e) => setSize(e.target.value)}>
                        <option value="">{t('select-size')}</option>
                        {availableSizes.map((size, index) => (
                            <option key={index} value={size} defaultValue={size === result.size}>
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
                {/* <Button onClick={() => addToCart(result)} variant="outlined" className="add-to-cart-button">{t('add-to-cart')}</Button> */}
                <Button onClick={() => addToCart(result, sizeRef.current.value)} variant="outlined" className="add-to-cart-button">{t('add-to-cart')}</Button>

            </div>
            <div className='product-image'>
                <img className='product-img' src={process.env.PUBLIC_URL + "/" + result.image} alt="" /></div>

            {/* <div dangerouslySetInnerHTML={{ __html: t('test') }}>
            </div> */}

        </div>
    )
}

export default SingleProduct
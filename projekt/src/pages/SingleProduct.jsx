import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import config from '../../src/data/config.json'
import "../../src/css/Product.css"

function SingleProduct() {
    const [products, setProducts] = useState([]);
    const { id } = useParams();
    const result = products.find((el) => el.id === Number(id));

    useEffect(() => {

        fetch(config.productsDbUrl)
            .then(res => res.json())
            .then(json => setProducts(json || []));
    }, []);

    if (!result) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <div className='details'>
            
            <div className='product-name'> {result.name}</div>
            <div>ID: {id}</div>
            
            <div className='product-description'>{result.description}</div>
            <div className='product-price'>Price: {result.price} €</div> <br />
            <label htmlFor="">Size: </label>
            <select  defaultValue={result.size}>
            {products.map(item => <option>{item.size}</option>)} </select> 
            <br /> <br />
            <label htmlFor="">Color: </label>
            <select  defaultValue={result.color}>
            {products.map(item => <option>{item.color}</option>)} </select>
            
            </div>
            <div className='product-image'>
                <img className='product-img' src={process.env.PUBLIC_URL + "/" + result.image} alt="" /></div>
        </div>
    )
}

export default SingleProduct
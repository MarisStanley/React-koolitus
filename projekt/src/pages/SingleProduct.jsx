import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import config from '../../src/data/config.json'
import "../../src/css/Product.css"
import Button from 'react-bootstrap/esm/Button';

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

    const addToCart = (productClicked) => {
        const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
        const index = cartLS.findIndex(element => element.product.id === productClicked.id);
        if (index >= 0) {
            cartLS[index].quantity++;

        } else {
            cartLS.push({ "product": productClicked, "quantity": 1 });

        }
        localStorage.setItem("cart", JSON.stringify(cartLS));





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

                <Link className="link-black" to="/shop">Shop</Link>

                <div className='product-name'> {result.name}</div>
                <div>Product ID: {id}</div>

                <div className='product-description'>{result.description}</div>
                <div className='product-price'>Price:  {result.price}€</div> <br />
                <div className='tables'>
                    <label className='text' htmlFor="">Size: </label>
                    <select className='select' defaultValue=''> 
                    <option value="">Select Size</option>
                        {availableSizes.map((size, index) => (
                            <option key={index} value={size} selected={size === result.size}>
                                {size}
                            </option>
                        ))}
                    </select>
                    <br /> <br />
                    <label className='text' htmlFor="">Color: </label>
                    <select className="select" defaultValue=''>
                    <option value="">Select Color</option>
                        {availableColors.map((color) => (
                            <option key={color} value={color}>
                                {color}
                            </option>
                        ))}
                    </select>
                </div>
                <Button onClick={() => addToCart(result)} variant="secondary" className="add-to-cart">Add to cart</Button>
            </div>
            <div className='product-image'>
                <img className='product-img' src={process.env.PUBLIC_URL + "/" + result.image} alt="" /></div>



        </div>
    )
}

export default SingleProduct
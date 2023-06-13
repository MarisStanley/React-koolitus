import React, { useEffect, useState } from 'react'
import ParcelMachines from './components/ParcelMachines'
import CheckoutStyle from '../../src/css/Checkout.css'

function Checkout(props) {

  const [checkout, setCheckout] = useState([]);

  useEffect(() => {
    const cartData = localStorage.getItem('checkoutCart');
    const cart = JSON.parse(cartData);
    if (cart && Array.isArray(cart)) {
      setCheckout(cart);
    } else {
      setCheckout([]);
    }
  }, []);


  const calculateTotal = () => {
    let total = 0;
    checkout.forEach((element) => {
      total += element.product.price * element.quantity;
    });
    return total;
  };

  const shippingCharge = 3;
  const totalWithShipping = calculateTotal() + shippingCharge;

  return (
    <div className="checkout-form">
      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Summary</span>
            <span className="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                {checkout.map((element, index) => (
                  <div className="checkout-product" key={index}>
                    <h6 className="checkout-name">{element.product.name}</h6>
                    <div className="checkout-name">
                      Size {element.product.size} - {element.quantity} pcs
                    </div>
                    <h6 className="checkout-name">
                      {element.product.price * element.quantity} €
                    </h6>
                    <br />
                  </div>
                ))}
                <h6>Shipping charge</h6>
                <div>3€</div>
              </div>
            </li>
           
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Choose the parcel machine</h6>
                <br />
                <ParcelMachines />
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <div>Total: {totalWithShipping} €</div>
            </li>
          </ul>
        </div>
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">Shipping information</span>
          <span className="badge badge-secondary badge-pill">3</span>
        </h4>
        <div className="col-md-8 order-md-1">
          <form className="needs-validation" noValidate>
            <div className="row">
              <div className="col-md-6 mb-5">
                <label htmlFor="firstName">First name</label> 
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  required
                ></input>
                <div className="invalid-feedback">Valid first name is required.</div>
              </div> 
             
              <div className="col-md-6 mb-5">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder=""
                  required
                ></input>
                <div className="invalid-feedback">Valid last name is required.</div>
              </div>
            </div>
            <div className="mb-3">
              <div className="input-group"></div>
            </div>
            <div className="mb-7">
              <label htmlFor="number">
                Phone number <span className="text-muted"></span>
              </label>
              <input
                type="number"
                className="form-control"
                id="phonenumber"
                placeholder=""
                required
              ></input>
              <div className="invalid-feedback">
                Please enter a valid phone number.
              </div>
            </div>
            <div className="mb-7">
              <label htmlFor="email">
                Email <span className="text-muted"></span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder=""
                required
              ></input>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
            <hr className="mb-4"></hr>
            <button
              className="btn btn-primary btn-lg btn-block"
              type="submit"
            >
              Continue to payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
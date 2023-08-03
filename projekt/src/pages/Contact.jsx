import React, { useRef, useState } from 'react'
import Map from '../components/Map'
import { Button } from '@mui/material'
import '../../src/css/Contact.css';
import emailjs from '@emailjs/browser';
import { t } from 'i18next';



function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jbnfzv7', 'template_09wafcq', form.current, 'TI6Ky8XgoxhjdOHSQ')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    form.current.value = "";
  };


  const shopLocation =
    [{
      name: "The Beach Shop",
      address: "Santa Monica",
      zipcode: "90401",
      phone: Number('18546544587'),
      email: "thebeachshop@thebeachshop.com"
    }]

  const [shop, setShop] = useState(shopLocation)

  const [coordinates, setCoordinates] = useState({
    lngLat: [34.0088, -118.4941],
    zoom: 8
  });


  const showShop = () => {
    setCoordinates({ lngLat: [34.0088, -118.4941], zoom: 13 });
    setShop(shopLocation)

  }


  return (

    <div>
      <div > {shop.map(item => <div className='map-button' key={item.name}> <Button variant="outlined" onClick={() => showShop()}>{item.name}</Button> </div>)}
        <Map mapCoordinates={coordinates} />
        <div className='contact-address'>
          <div>Santa Monica, 90401</div>
          <div> +1 854 654 4587</div>
          <div>thebeachshop@thebeachshop.com </div>
        </div>
        <br />
        <div className='contact-us'>
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">{t('get-in-touch')}</span>
          </h4>
          <div className="col-md-8 order-md-1   " >
            <form className="needs-validation" noValidate ref={form} onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-6 mb-5 ">
                  <label htmlFor="name">{t('name')}</label>
                  <input
                    name="from_name"
                    type="text"
                    className="form-control contact-name"
                    id="name"
                    placeholder=""
                    required
                  ></input>
                  <div className="invalid-feedback">Valid  name is required.</div>
                </div>
                <div className="mb-7">
                  <label htmlFor="email">
                    <div className='contact-email'  >{t('email')}</div>
                  </label>
                  <input
                    name="from_email"
                    type="email"
                    className="form-control  contact-email-input"
                    id="email"
                    placeholder=""
                    required
                  ></input>
                  <div className="invalid-feedback">
                    Please enter a valid email.
                  </div>
                </div>
                <div className="col-md-6 mb-5">
                  <label className='contact-message' htmlFor="message">{t('message')}</label>
                  <textarea
                    name="message"
                    type="text"
                    className="form-control  message"
                    id="fixed"
                    placeholder={t('enter-your-message-here')}
                    required
                  ></textarea>
                  <div className="invalid-feedback">Cannot send an empty message.</div>
                </div>
              </div>
              <div className='contact-button'>
                <Button
                  type="submit"
                  variant="outlined"
                  className="btn btn-primary btn-lg btn-block type=submit "
                >
                  {t('send')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>

  )
}

export default Contact
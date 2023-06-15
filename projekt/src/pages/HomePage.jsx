import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import config from '../../src/data/config.json'
import { useTranslation } from 'react-i18next';


function HomePage() {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const activeLanguage = localStorage.getItem("language");



  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => setProducts(json || []));
  }, []);


  const getLogo = () => {
    if (activeLanguage === 'en') {
      return <img className="pilt7" src="THE5 copy.png" alt="" />;
    } else {
      return <img className="pilt7" src="THE5 copy 2.png" alt="" />;
    }
  };


  return (
    <div className='background-home'>
      {/* <div className='yellow-lines'></div> */}


      <img className="pilt" src="banner.jpg" alt="" />
      <div className='headline1'> {t('bestsellers')}</div>

      <div className="pilt1">
        {products
          .filter((el) => el.id === Number('35422022') || el.id === Number('35422021') || el.id === Number('35422023'))
          .map((el) => (
            <div key={el.id} className="image-container" >
              <Link to={'/product/' + el.id}>
                <img className='bestsellers' src={el.image} alt="" />
              </Link>
            </div>
          ))}
      </div>

      <div >
        <img   src="" alt="" /> {getLogo()}
      </div>
      <div class="grid-container">
        <div class="item">
          <Link to="/shop">
            <img class="pilt3" src="glasseshim3.jpg" alt="" />
            <div class="headline3">{t('glasses1')}<br />{t('for-him')}</div>

          </Link>
        </div>
        <div class="item">
          <Link to="/shop">
            <img class="pilt5" src="hatsher5.jpg" alt="" />
            <div class="headline2">{t('hats1')}<br />{t('for-her')}</div>

          </Link>
        </div>
      </div>

      

      <img className="pilt6" src="footer13.jpg" alt="" />
      <div className='contact-us-all'>
     <div className='contact-us-footer'>CONTACT US</div>
      <div  className='contact-footer'>
        <div>Beverly Hills 90210</div>
        <div> +1 854 654 4587</div>
        <div>thebeachshop@thebeachshop.com </div>
      </div>
      </div>

    </div>
  )
}

export default HomePage
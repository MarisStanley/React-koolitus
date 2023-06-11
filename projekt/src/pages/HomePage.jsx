import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import config from '../../src/data/config.json'
import { useTranslation, i18n } from 'react-i18next';


function HomePage() {
  const { t, i18n } = useTranslation();
  const [products, setProducts] = useState([]);

  const languageTo = (languageClicked) => {
    i18n.changeLanguage(languageClicked);
    localStorage.setItem("language", languageClicked);
  };

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => setProducts(json || []));
  }, []);
  return (
    <div className='background-home'>
      {/* <div className='yellow-lines'></div> */}


      <img className="pilt" src="banner.jpg" alt="" />
      <div className='headline1'> BESTSELLERS</div>

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

      <div>
        <img className="pilt7" src="THE5 copy.png" alt="" />
      </div>
      <div class="grid-container">
        <div class="item">
          <Link to="/shop">
            <img class="pilt3" src="glasseshim3.jpg" alt="" />
            <div class="headline3">GLASSES<br />FOR HIM</div>
            <div class="button-container">
              <Button variant="secondary" className="button2">View</Button>
            </div>
          </Link>
        </div>
        <div class="item">
          <Link to="/shop">
            <img class="pilt5" src="hatsher5.jpg" alt="" />
            <div class="headline2">HATS<br />FOR HER</div>
            <div class="button-container">
              <Button variant="secondary" className="button2">View</Button>
            </div>
          </Link>
        </div>
      </div>

      <div >
        {/* <img className="pilt4" src="hatsher.jpg" alt="" /> */}


      </div>

      <img className="pilt6" src="footer13.jpg" alt="" />

    </div>
  )
}

export default HomePage
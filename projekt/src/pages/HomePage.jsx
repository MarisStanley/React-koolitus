import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import config from '../../src/data/config.json'

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => setProducts(json || []));
  }, []);
  return (
    <div>
      {/* <div className='yellow-lines'></div> */}

      {/* <div className='headline'> THE <br />  BEACH  <br />  SHOP <br />  </div> */}

     
      <img className="pilt" src="banner.jpg" alt="" />
      <div className='headline1'> BESTSELLERS</div>
      <div className="pilt1">

      {products.map(el => 
         <div key={el.id} className="image-container">
         <img className='purse1' src={el.image} alt="" />
         <Button as={Link} to={'/product/' + el.id} className='button'>View</Button>

        
        </div>

        )}
      </div>
      <div>
      {/* <img className="pilt2" src="glasseshim.jpg" alt="" /> */}
      <img className="pilt7" src="THE5 copy.png" alt="" />
      </div>
      <div class="grid-container">
  <div class="item">
    <img class="pilt3" src="glasseshim3.jpg" alt="" />
    <div class="headline3">GLASSES<br />FOR HIM</div>
    <div class="button-container">
      <Link to="/shop">
        <Button variant="secondary" className="button2">View</Button>
      </Link>
    </div>
  </div>
  <div class="item">
    <img class="pilt5" src="hatsher4.jpg" alt="" />
    <div class="headline2">HATS<br />FOR HER</div>
    <div class="button-container">
      <Link to="/shop">
        <Button variant="secondary" className="button2">View</Button>
      </Link>
    </div>
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
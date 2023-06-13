import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import HomePage from '../../projekt/src/pages/HomePage';
import Contact from './pages/Contact';
import About from './pages/About';
import Shop from './pages/Shop';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './components/Checkout';
import Login from './pages/Login';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {  useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const languageTo = (languageClicked) => {
    i18n.changeLanguage(languageClicked);
    localStorage.setItem("language", languageClicked);


  };

  return (
    <div  className="App">
      <Navbar collapseOnSelect expand="lg" bg="f000000" variant="light">
       <Container>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
       
          <Nav className="me-auto">
          <Nav.Link as={Link}  to="">{t('home')}</Nav.Link>
          <Nav.Link as={Link}  to="/shop">{t('shop')}</Nav.Link>
          <Nav.Link as={Link}  to="/contact">{t('contact')}</Nav.Link>
          <Nav.Link as={Link}  to="/about">{t('about')}</Nav.Link>
           </Nav>
           <Nav>
        <Nav.Link as={Link}  to="/login">{t('login')}</Nav.Link>
        <Nav.Link as={Link}  to="/cart">{t('cart')}</Nav.Link>
        <div >
        <button className='lang-button-1' onClick={() => languageTo("en")}>  ENG</button>
        <div className='lang-button'> /</div>
        <button className='lang-button' onClick={() => languageTo("ee")}> EST</button>
       </div>
        
        </Nav>
        </Navbar.Collapse>
        <Navbar.Brand as={Link}  to="" > <img className="logo" src="THE4.png" alt="" />
        
        </Navbar.Brand>
       
      </Container>
    </Navbar>
      

      
  



     <Routes>
     <Route path="" element={ < HomePage />}/> 
     <Route path="shop" element={ < Shop />}/> 
     <Route path="contact" element={ < Contact />}/> 
     <Route path="about" element={ < About />}/> 
     <Route path="product/:id" element={ < SingleProduct />}/> 
     <Route path="cart" element={ < Cart />}/> 
     <Route path="checkout" element={ < Checkout />}/>
     <Route path="login" element={ < Login />}/>
     </Routes>
    </div>
  );
}

export default App;

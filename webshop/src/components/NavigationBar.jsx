import React,  {useContext} from 'react'
import { Link } from 'react-router-dom';
import {  useTranslation } from 'react-i18next';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { CartSumContext  } from '../store/CartSumContext'
import { AuthContext } from '../store/AuthContext';


function NavigationBar() {
    const { t, i18n } = useTranslation();
    const { cartSum } = useContext(CartSumContext)
    const {loggedIn, setLoggedIn} = useContext(AuthContext);
    

    const languageTo = (languageClicked) => {
        i18n.changeLanguage(languageClicked);
        localStorage.setItem("language", languageClicked);


      };


    //   const login= () => {
    //     setLoggedIn(true);

    //   }

      const logout= () => {
        setLoggedIn(false);
      }
  return (
    
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">  Maris's Shop </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           {loggedIn === true &&  <Nav.Link as={Link}  to="/admin">{t("admin")}</Nav.Link>}
            <Nav.Link as={Link}  to="/contact">{t("contact")}</Nav.Link>
            <Nav.Link as={Link}  to="/shops">{t("shops")}</Nav.Link>
          </Nav>
          <Nav>
             <Nav.Link as={Link}  to="/login">Log in</Nav.Link>
             <Nav.Link as={Link}  to="/signup">Sign up</Nav.Link>
            <button   onClick={logout}>Log out</button>
            <div>{cartSum} €</div>
            {/* <img className='lang' src="/english.png" onClick={languageToEn} alt="" />
            <img className='lang' src="/estonia.png" onClick={languageToEe} alt="" />
            <img className='lang' src="/poland.png" onClick={languageToPl} alt="" />
            <img className='lang' src="/norway.png" onClick={languageToNo} alt="" />
             */}
             <img className='lang' src="/english.png" onClick={() => languageTo("en")} alt="" />
            <img className='lang' src="/estonia.png" onClick={() => languageTo("ee")} alt="" />
            <img className='lang' src="/poland.png" onClick={() => languageTo("pl")} alt="" />
            <img className='lang' src="/norway.png" onClick={() => languageTo("no")} alt="" />
            
            <Nav.Link  as={Link}  to="/cart">{t("cart")}</Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default NavigationBar
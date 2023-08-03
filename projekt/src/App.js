import { Route, Routes, Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import './App.css';
import HomePage from '../../projekt/src/pages/HomePage';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './components/Checkout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import LogOut from './pages/LogOut';
import MyAccount from './pages/MyAccount';
import NotFound from './pages/NotFound';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { AuthContext } from '../../projekt/src/pages/AuthContext';
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { CartSumContext } from './pages/CartSumContext';

function App() {
  const { t, i18n } = useTranslation();
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate()
  const { cartSum } = useContext(CartSumContext)

  const logout = () => {
    setLoggedIn(false);
    sessionStorage.removeItem("token")
    navigate("/")
  }

  const languageTo = (languageClicked) => {
    i18n.changeLanguage(languageClicked);
    localStorage.setItem("language", languageClicked);
  };



  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="f000000" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="">{t('home')}</Nav.Link>
              <Nav.Link as={Link} to="/shop">{t('shop')}</Nav.Link>
              <Nav.Link as={Link} to="/contact">{t('contact')}</Nav.Link>
              
            </Nav>
            <Nav>
              {loggedIn === false &&
                <>
                  <Nav.Link as={Link} to="/login">{t('login')}</Nav.Link>
                  <Nav.Link as={Link} to="/signup">{t('signup')}</Nav.Link>
                </>}
              {loggedIn === true &&
                <>
                  <Nav.Link as={Link} to="/myaccount">{t('myaccount')}</Nav.Link>
                  <Nav.Link as={Link} to="/" onClick={logout}>{t('logout')}</Nav.Link>
                </>}
              <Nav.Link as={Link} to="/cart">{t('cart')}</Nav.Link>
              <div>{cartSum} €</div>
              
              <Nav.Link className='lang-button-1' onClick={() => languageTo("en")}>  ENG</Nav.Link>
              <Nav.Link className='lang-button'> /</Nav.Link>
              <Nav.Link className="lang-button" onClick={() => languageTo('ee')}>
                EST
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand as={Link} to="" > <img className="logo" src="THE4.png" alt="" />
          </Navbar.Brand>
        </Container>
      </Navbar>



      <Routes>
        <Route path="" element={< HomePage />} />
        <Route path="shop" element={< Shop />} />
        <Route path="contact" element={< Contact />} />
        <Route path="product/:id" element={< SingleProduct />} />
        <Route path="cart" element={< Cart />} />
        <Route path="checkout" element={< Checkout />} />
        <Route path="login" element={< Login />} />
        <Route path="signup" element={< SignUp />} />
        <Route path="logout" element={< LogOut />} />
        { loggedIn === true &&   <>
        <Route path="myaccount" element={< MyAccount />} />
        </>}
        <Route path="*"   element={ <NotFound /> } />


      </Routes>
    </div>
  );
}

export default App;

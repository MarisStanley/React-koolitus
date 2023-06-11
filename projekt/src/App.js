import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import HomePage from '../../projekt/src/pages/HomePage';
import Contact from './pages/Contact';
import About from './pages/About';
import Shop from './pages/Shop';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div  className="App">
      <Navbar collapseOnSelect expand="lg" bg="f000000" variant="light">
       <Container>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
       
          <Nav className="me-auto">
          <Nav.Link as={Link}  to="">Home</Nav.Link>
          <Nav.Link as={Link}  to="/shop">Shop</Nav.Link>
          <Nav.Link as={Link}  to="/contact">Contact</Nav.Link>
          <Nav.Link as={Link}  to="/about">About</Nav.Link>
           </Nav>
           <Nav>
        <Nav.Link as={Link}  to="/login">Login</Nav.Link>
        <Nav.Link as={Link}  to="/cart">Cart</Nav.Link>
        <div className='lang'>
        <div> ENG</div>
        <div> /</div>
        <div> EST</div>
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

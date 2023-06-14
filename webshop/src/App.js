
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/global/HomePage';
import Cart from './pages/global/Cart';
import Shops from './pages/global/Shops';
import {ContactUs} from './pages/global/ContactUs';
import SingleProduct from './pages/global/SingleProduct';
import AdminHome from './pages/admin/AdminHome';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import MaintainProducts from './pages/admin/MaintainProducts';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaintainShops from './pages/admin/MaintainShops';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';



import NavigationBar from './components/NavigationBar';



function App() {
  

  // const languageToEn = () => {
  //   i18n.changeLanguage("en");
  //   localStorage.setItem("language", "en")

  // }

  // const languageToEe = () => {
  //   i18n.changeLanguage("ee");
  //   localStorage.setItem("language", "ee")
    
  // }

  // const languageToPl = () => {
  //   i18n.changeLanguage("pl");
  //   localStorage.setItem("language", "pl")
    
  // }

  // const languageToNo = () => {
  //   i18n.changeLanguage("no");
  //   localStorage.setItem("language", "no")
    
  // }
  


  return (
    <div className="App">
      
  <NavigationBar/>

      <Routes>
        <Route path=""   element={ <HomePage/> } />
        <Route path="cart"   element={ <Cart/> } />
        <Route path="shops"   element={ <Shops /> } />
        <Route path="contact"   element={ <ContactUs /> } />
        <Route path="product/:id" element={<SingleProduct />} />
        <Route path="admin"   element={ <AdminHome /> } />
        <Route path="admin/add-product"   element={ <AddProduct/> } />
        <Route path="admin/edit-product/:id"   element={ <EditProduct /> } />
        <Route path="admin/maintain-products"   element={ <MaintainProducts /> } />
        <Route path="admin/maintain-categories"   element={ <MaintainCategories /> } />
        <Route path="admin/maintain-shops"   element={ <MaintainShops /> } />
        <Route path="login"   element={ <Login /> } />
        <Route path="signup"   element={ <Signup /> } />
        </Routes>
    </div>
  );
}

export default App;

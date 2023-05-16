
import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Uudised from './pages/Uudised';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';



function App() {
  const { t, i18n } = useTranslation();

  const languageToEn = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("language", "en")

  }

  const languageToEe = () => {
    i18n.changeLanguage("ee");
    localStorage.setItem("language", "ee")
    
  }

  return (
    <div >
      
     
        <Navbar>
        <Nav>
          <Nav.Link as={Link}  to="/">{t("/")} </Nav.Link> 
          <Nav.Link as={Link}  to="uudised">{t("uudised")} </Nav.Link> 
          <Nav.Link as={Link}  to="kontakt">{t("kontakt")} </Nav.Link>  
          <Nav.Link as={Link}  to="meist">{t("meist")} </Nav.Link> 
          </Nav>
      
      

          <img className='lang' src="/english.png" onClick={languageToEn} alt="" />
          <img className='lang' src="/estonia.png" onClick={languageToEe} alt="" />

      
      </Navbar>




      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="uudised" element={ <Uudised />}/> 
        <Route path="kontakt" element={ <Kontakt />}/> 
        <Route path="meist" element={ <Meist />}/> 

      </Routes>

    </div>
  );
}

export default App;

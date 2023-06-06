
import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Uudised from './pages/Uudised';
import LisaUudis from './pages/LisaUudis';
import HaldaUudiseid from './pages/HaldaUudiseid';
import YksUudis from './pages/YksUudis';
import YksPostitus from './pages/YksPostitus';
import MuudaUudis from './pages/MuudaUudis';
import KasutajaPostitus from './pages/KasutajaPostitus';
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
          <Nav.Link as={Link}  to="lisa-uudis">{t("lisa-uudis")} </Nav.Link> 
          <Nav.Link as={Link}  to="halda-uudiseid">{t("uudiseid-haldama")} </Nav.Link>
          <Nav.Link as={Link}  to="uudis">{t("yks-uudis")} </Nav.Link>  
          <Nav.Link as={Link}  to="muuda">{t("muuda-uudis")} </Nav.Link>  
          <Nav.Link as={Link}  to="kasutaja">{t("kasutaja-postitus")} </Nav.Link>
          <Nav.Link as={Link}  to="postitus">{t("yks-postitus")} </Nav.Link>  
          </Nav>
      
      

          <img className='lang' src="/english.png" onClick={languageToEn} alt="" />
          <img className='lang' src="/estonia.png" onClick={languageToEe} alt="" />

      
      </Navbar>




      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="uudised" element={ <Uudised />}/> 
        <Route path="kontakt" element={ <Kontakt />}/> 
        <Route path="meist" element={ <Meist />}/> 
        <Route path="lisa-uudis" element={ <LisaUudis />}/> 
        <Route path="halda-uudiseid" element={ <HaldaUudiseid />}/> 
        <Route path="uudis/:index" element={ <YksUudis />}/> 
        <Route path="muuda/:index" element={ <MuudaUudis />}/> 
        <Route path="kasutaja/:kasutajaId" element={ <KasutajaPostitus />}/> 
        <Route path="postitus/:postituseId" element={ <YksPostitus />}/> 

      </Routes>

    </div>
  );
}

export default App;

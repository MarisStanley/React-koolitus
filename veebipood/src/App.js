//import logo from './logo.svg';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import { useState } from 'react';
import Seaded from './pages/Seaded';
import Meist from './pages/Meist';

function App() {
  const [logimiseTekst, uuendaLogimiseTekst] = useState('Log In');
  const [teema, uuendaTeema] = useState(localStorage.getItem("theme") || "hele-leht");
  // kui tuleb null ehk tuhjus || vota parem pool

  const logIn = () => {
    if (logimiseTekst === "Log In") {
      uuendaLogimiseTekst('Log Out'); 
    }else {
        uuendaLogimiseTekst('Log In'); 

      
    }
    
  }
  const muudaTumedaks = () => {
    uuendaTeema("tume-leht")
    localStorage.setItem("theme", "tume-leht");
    
  }
  const muudaHeledaks = () => {
    uuendaTeema("hele-leht")
    localStorage.setItem("theme", "hele-leht");
  }

  return (
    <div className={teema}>  
     {/* voin panna otse className sisse  */}
      <button onClick={() => logIn()}>{logimiseTekst}</button>
      {teema === "hele-leht" && <button onClick = {muudaTumedaks}>Tume leht</button>}
      {teema === "tume-leht" &&<button onClick = {muudaHeledaks}>Hele leht</button>}



  
    
      <Link to="/">
        <img className="pilt" src="https://th.bing.com/th/id/R.53a9df467efd9e6c5cf7232d8ac2fffc?rik=z%2b%2bG33ivoz1S9w&pid=ImgRaw&r=0" alt="" />
      </Link>

      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>

      <Link to="/meist">
        <button className="nupp">Meist</button>
      </Link>

      <Link to="/seaded">
        <button className="nupp">Seaded</button>
      </Link>
      <Link to="/ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>

      {/* telia.ee    <div></div>  */}
       <Routes>
        <Route path="" element={ <Avaleht />}/> 
        <Route path="lisa-toode" element={<LisaToode />}/>  
        <Route path="meist" element={<Meist />}/>   
        <Route path="seaded" element={<Seaded />}/>   
        <Route path="ostukorv" element={<Ostukorv />}/>   
        


       </Routes>
      
    </div>
  );
}

export default App;
//Routes on alguse ja lõpuga, route on isesulguv tag
//Värvid - tumesinine -JS function, undefined, const, true, false, let,  - liigitused - neid me ei vali, ettekirjutatud.
// HTMLis liigitus, tag, div, button, img, input, label - ka tumesinised.
// tavaline sinine - muutuja -nii HTMLis kui ka JSis. Ise oleme loonud. useState vasakul pool.
// helesinine - sissekirjutatud muutujad või omadused. JS local storage, sessionStorage, console JSON.
//HTML atribuudid, ommadused, className, alt, src, onClick, path, element - helesinine.
//kollane -HTML ja JS - funktsioonid, sulg lõpus kui võtame kasutusele
// punased-oranzid - jutumärkides väärtused nii HTML kui JS
// valge HTMLs väljakuvatav tekst
// lillakad JSs on sissekirjutatud koodisõna: import, if, else, return
// Sulud muudavad värvi olenevalt sellest, kus asuvad, ei ole tähtis.
// Märgid 
// {} - JS koodiblokk
// HTMLis dünaamika ehk JS kasutusega.
// sulgudel peab olema algus ja lõpp
// []  useState vordusmargist vasakul pool [muutuja, funktsioon-mis-muudab-muutujat]  = useState(-algvaartus-)
//= annan vaartust
// === kontrollin kas vasak ja parem pool on vordsed 5-5===o luger.current.value === ""  laigitud === 
// ! keerab vaartused tagurpidi !ture ---> false
// > suurem  >= suurem vordne  < vaiksem <= vaiksem vordne
// ; ei pea panema, aga on rea lopetamise tahis
// () => tahistab funktsiooni
// == lehel toimib, aga muidu annab errori, === vaja.
//&& kui on eespool tode, siis naitab vaskpoolset
// ? : kui kusimargist eespool on tode, siis tee kusimargist parem pool, kui vaar, siis koolonist parem pool.
// "" vs '' - JSs erinevust ei ole. Kuid kui tahan kasutada sona sees jutumarke, siis peavad olema erinevad.

// kaks kohta errorite vaatamiseks  terminal -runtime errors. parem klõps - inspect- console - run-time error
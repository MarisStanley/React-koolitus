
import {Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt';
import Seaded from './pages/Seaded';
import Loader from './pages/Loader';
import {useRef, useState} from 'react';

function App() {
  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonum] = useState("");
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

  const logiSisse = () => {
    if (paroolRef.current.value === '123') {
    muudaSisselogitud("jah")
    muudaSonum(",oled Sisselogitud");
  } else {
    muudaSonum("Vale parool");

  }
}

const logiValja = () => {
  muudaSisselogitud("ei");
  muudaSonum("Oled välja logitud");
}

  
  return (
 
    <div className='App'>
      <div>{sonum}</div>

    <div> 
      <label>Kasutajanimi</label>
      <input ref={kasutajaNimiRef} type="text" /><br></br>
      <label>Parool</label>
      <input ref={paroolRef} type="password" />
    </div>

      {sisselogitud === "ei" && <button onClick={(logiSisse) }>Logi sisse</button> }
      {sisselogitud === "jah" &&<button onClick={(logiValja) }>Logi välja</button>}
      <br></br> <br></br>
      <Link to="/">
        <button>Avalehele</button>
      </Link> 
      <Link to="/meist">
        <button>Meie meeskond</button>
      </Link> 
      <Link to="/kontakt">
        <button>Võta ühendust</button>
      </Link> 
      <Link to="/seaded">
        <button>Mingid seaded</button>
      </Link> 
      <Link to="/loader">
        <button>Loader</button>
      </Link> 




      <Routes>
        <Route path="/" element={<Avaleht/>}/>
        <Route path="/meist" element={<Meist/>}/>
        <Route path="/kontakt" element={<Kontakt/>}/>
        <Route path="/seaded" element={<Seaded/>}/>
        <Route path="/loader" element={<Loader/>}/>
        
      </Routes>
      
   
    </div>
  );
}

export default App;

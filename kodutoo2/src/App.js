
import {Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt';
import Seaded from './pages/Seaded';

function App() {
  return (
    <div>
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




      <Routes>
        <Route path="/" element={<Avaleht/>}/>
        <Route path="/meist" element={<Meist/>}/>
        <Route path="/kontakt" element={<Kontakt/>}/>
        <Route path="/seaded" element={<Seaded/>}/>
        
      </Routes>
      
   
    </div>
  );
}

export default App;

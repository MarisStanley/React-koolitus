import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import LisaJook from './pages/LisaJook';
import HaldaJooke from './pages/HaldaJooke';
import Jook from './pages/Jook';

function App() {
  return (
    <div>
      <Link to="/">
        <button> Avaleht</button>
      </Link>
      <Link to="/LisaJook">
        <button> Lisa jook</button>
      </Link>
      <Link to="/HaldaJooke">
        <button> Halda jooke</button>
      </Link>
      <Link to="/Jook">
        <button> Jook</button>
      </Link>

      <Routes>
        <Route path="" element={<Avaleht />}  /> 
        <Route path="lisaJook" element={<LisaJook />}  /> 
        <Route path="haldaJooke" element={<HaldaJooke/>}  /> 
        <Route path="jook/:number/"element ={<Jook/>} /> 


      </Routes>
    </div>
  );
}

export default App;

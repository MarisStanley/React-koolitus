import {Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import LisaTegelane from './pages/LisaTegelane';
import ValitudTegelased from './pages/ValitudTegelased';


function App() {
  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link> 
      <Link to="/LisaTegelane">
        <button>Lisa Tegelane</button>
      </Link> 
      <Link to="/ValitudTegelased">
        <button>Valitud Tegelased</button>
      </Link> 


<Routes>
        <Route path="/" element={<Avaleht/>}/>
        <Route path="/LisaTegelane" element={<LisaTegelane/>}/>
        <Route path="/ValitudTegelased" element={<ValitudTegelased/>}/>
      
        
      </Routes>

      </div>
  );
}

export default App;

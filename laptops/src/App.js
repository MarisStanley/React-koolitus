
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import LisaArvuti from './pages/LisaArvuti';
import VaataArvuteid from './pages/VaataArvuteid';
import Ostukorv from './pages/Ostukorv';
import Tooted from './pages/Tooted';





function App() {
  return (
    <div>
      <Link to="/">
      <button>Avalehele</button>
      </Link>
      <Link to="/all">
      <button>Vaata sülearvuteid</button>
      </Link>
      <Link to="/add">
      <button>Lisa sülearvuti</button>
      </Link>
      <Link to="/cart">
      <button>Ostukorv</button>
      </Link>
      <Link to="/tooted">
      <button>Tooted</button>
      </Link>



      <Routes>
        <Route path="" exact element={<Avaleht/> }/> 
        <Route path="all" exact element={<VaataArvuteid/> }/> 
        <Route path="add" exact element={<LisaArvuti /> }/> 
        <Route path="cart" exact element={<Ostukorv /> }/> 
        <Route path="tooted" exact element={<Tooted /> }/> 
         
      </Routes>
      

    </div>
  );

  
}

export default App;

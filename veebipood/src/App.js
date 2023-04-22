//import logo from './logo.svg';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';

function App() {
  return (
    <div className="App">
      <Link to="/">
        <img className="pilt" src="https://th.bing.com/th/id/R.53a9df467efd9e6c5cf7232d8ac2fffc?rik=z%2b%2bG33ivoz1S9w&pid=ImgRaw&r=0" alt="" />
      </Link>

      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>

      <Link to="/ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>

      {/* telia.ee    <div></div>  */}
       <Routes>
        <Route path="" element={ <Avaleht />}/> 
        <Route path="lisa-toode" element={<LisaToode />}/>  
        <Route path="ostukorv" element={<Ostukorv />}/>   
        


       </Routes>
      
    </div>
  );
}

export default App;
//Routes on alguse ja lõpuga, route on isesulguv tag

import {Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Kujundus from './pages/Kujundus';
import Muutmine from './pages/Muutmine';
import Ilmumine from './pages/Ilmumine';




function App() {
  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="kujundus">
        <button>Kujundused</button>
      </Link>
      <Link to="muutmine">
        <button>Muuda</button>
      </Link>
      <Link to="ilmumine">
        <button>Ilmumine</button>
      </Link>






      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="kujundus" element={ <Kujundus />}/> 
        <Route path="muutmine" element={ <Muutmine />}/> 
        <Route path="ilmumine" element={ <Ilmumine />}/> 

      </Routes>

    </div>
  );
}

export default App;

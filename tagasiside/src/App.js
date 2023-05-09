
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Tagasiside from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad';
import Nimed from './pages/Nimed';

function App() {
  return (
    <div>

  

      <Link to="/">
        <button>Avalehele</button>
      </Link> 
      <Link to="/tagasiside">
        <button>Tagasisidede lehele</button>
      </Link> 
      <Link to="/tagasisideandjad">
        <button>Tagasisidede andjad</button>
      </Link> 
      <Link to="/nimed">
        <button>Nimed</button>
      </Link> 

      

      <Routes>
        <Route path="/" element={<Avaleht/>}/>
        <Route path="/tagasiside" element={<Tagasiside/>}/>
        <Route path="/tagasisideandjad" element={<TagasisideAndjad/>}/>
        <Route path="/nimed" element={<Nimed/>}/>
 

      </Routes>
       
    </div>
  );
}

export default App;

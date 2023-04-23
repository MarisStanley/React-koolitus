
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Work from './pages/Work';
import Hobbies from './pages/Hobbies';
import Courses from './pages/Courses';

function App() {
  return (
    <div className="App">
      <img className="pilt" src="https://content.wepik.com/statics/1484203/minimalist-floral-spring-twitter-header-r-887888475page1.jpg" alt="" />
      <text className='tekst'>Welcome! This website is made for Programming and Design to show my portfolio.</text>
      
      
      <div> className="rectangle"</div>
      

      <div className='navigation-pictures'>
      <Link to="work">
       <img className="pilt" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQuf-yeSge-IKi6rbKTStTy3fUKYIybUuCb0GXzsTxoXPuxEqzS" alt="" />
       <p>Tööde lehele</p>
      </Link>
      <Link to="hobbies">
       <img className="pilt" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTzlSWdsSViWlgmZhKGaG46y1Ng1uswQsNTKoiq2RIupXlg8rCI" alt="" />
       <p>Hobide lehele</p>
      </Link>
      <Link to="courses">
       <img className="pilt" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5k6hl5LCrxLUVTXZihj3tTc1_zhvb8ygDNwaEwk7xGt3-_1eg" alt="" />
       <p>Kursuste lehele</p>
      </Link>

      
      </div>

      <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/Zb85Al3Mxbo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />  

      

      <Routes>
        <Route path="work" element={ <Work />}/> 
        <Route path="hobbies" element={ <Hobbies />}/> 
        <Route path="courses" element={ <Courses />}/> 
         
      </Routes>

      <a className="facebook-button" href="https://www.facebook.com/jee" >
        <img src='/facebook.png' alt='' />
        <span>Facebook</span>

      </a>
      
    </div>
  );
}

export default App;

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import joogidFailist from "../data/joogid.json";

function Avaleht() {
    const [joogid, uuendaJoogid] = useState(joogidFailist);

    const kustuta = (index) => {
        joogidFailist.splice(index, 1);
        uuendaJoogid(joogidFailist.slice());
    }
  return (
    <div>
        {joogid.map((el, index) => <div>{el} <button onClick={() => kustuta(index)}>x</button></div>)}

        Joogid:
        {joogid.map((el,index) =>
       <div>
        <Link to={"/jook/" + index}>
          <span>{el}</span>
        </Link>
        
         </div>)}
    </div>
  )
}

export default Avaleht
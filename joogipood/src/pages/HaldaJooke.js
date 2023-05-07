import React, {useState} from 'react'
import joogidFailist from "../data/joogid.json";

function HaldaJooke() {
   
    const [joogid, uuendaJoogid] = useState(joogidFailist);

    const kustuta = (index) => {
        joogidFailist.splice(index, 1);
        uuendaJoogid(joogidFailist.slice());
    }

  


  return (
    <div>
    
    <br />

    {joogid.map((el, index) => <div>{el}<button onClick={() => kustuta(index)}>x</button></div>)}

    </div>
  )
}

export default HaldaJooke
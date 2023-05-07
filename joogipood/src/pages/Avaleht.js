import React, { useState } from 'react'
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
    </div>
  )
}

export default Avaleht
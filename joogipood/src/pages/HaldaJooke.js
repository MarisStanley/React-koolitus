import React, {useEffect, useState} from 'react'
// import joogidFailist from "../data/joogid.json";
import config from "../../src/data/config.json"

function HaldaJooke() {
   
    const [joogid, uuendaJoogid] = useState([]);

    useEffect(() => {
      fetch(config.joogidDbUrl)
      .then(res => res.json())
      .then(json => uuendaJoogid(json || []));
      
    }, []);

    const kustuta = (index) => {
        joogid.splice(index, 1);
        uuendaJoogid(joogid.slice());
        fetch(config.joogidDbUrl,
          {"method": "PUT", "body": JSON.stringify(joogid)});
    }

  


  return (
    <div>
    
    <br />

    {joogid.map((el, index) => <div>{el.nimi}<button onClick={() => kustuta(index)}>x</button></div>)}

    </div>
  )
}

export default HaldaJooke
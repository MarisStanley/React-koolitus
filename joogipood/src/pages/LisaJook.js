import React, {useEffect, useRef, useState} from 'react'
// import joogidFailist from "../data/joogid.json";
import config from "../../src/data/config.json"

function LisaJook() {
    const jookRef = useRef();
    const [joogid, setJoogid] = useState([]);

    useEffect(() => {
      fetch(config.joogidDbUrl)
      .then(res => res.json())
      .then(json => setJoogid(json || []));
      
    }, []);

    const lisaUusJook = () => {
        joogid.push({"nimi":jookRef.current.value});
        fetch(config.joogidDbUrl,
          {"method": "PUT", "body": JSON.stringify(joogid)});
      

    }
  return (
    <div>
        <br />
        <label>Lisa:</label>
    <input  ref={jookRef} type='text' />
    <button onClick={() => lisaUusJook()}>Sisesta</button>
    </div>
  )
}

export default LisaJook
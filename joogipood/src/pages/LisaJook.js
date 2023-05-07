import React, {useRef} from 'react'
import joogidFailist from "../data/joogid.json";

function LisaJook() {
    const jookRef = useRef();

    const lisaUusJook = () => {
        joogidFailist.push(jookRef.current.value);
      

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
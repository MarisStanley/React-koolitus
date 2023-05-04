import React, { useRef, useState} from 'react'
import tootedFailist from "../data/tooted.json";

function LisaToode() {
  const [sonum, uuendaSonum]  = useState("Lisa toode!");
  const inputiLuger = useRef();  

//ref loeb inputi sees väärtusi. const nimiRef ´useRef()
// const nimiViide = useRef();  Panen üksõik millise nimetuse (nimiViide)

  //function lisa() {}

  const lisa = () => {
    if (inputiLuger.current.value === "") {
      uuendaSonum("Toodet ei saa tühja nimega lisada.");

    } else {
      uuendaSonum("Toode lisatud, nimega: " + inputiLuger.current.value);
      tootedFailist.push(inputiLuger.current.value);
    }
    
  }

  return (
    <div>
      <div>{sonum}</div>
      <label htmlFor="Uue toote nimi"></label>
      <input ref={inputiLuger} type="text" />"
      <button onClick={lisa}>Lisa</button>
    </div>
  )
}

export default LisaToode

// function lisa() {}  ja const lisa = () => {}  on samad.
//label pannakse inputi juurde. Label on teksti väljatoomiseks. Pole erilisem kui span. 
//Label asemel võib olla ka span.  
//Tuleb tekitada väärtus, ehk ref. Muudmoodi ei saa
//Kui vajutatakse inputiLuger.current.value, siis võetakse inputi refi seest väärtus.
//Inputi luger on inputi seest väärtuste kättesaamiseks.
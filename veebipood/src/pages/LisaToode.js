import React, { useRef, useState} from 'react'
import tootedFailist from "../data/tooted.json";

function LisaToode() {
  const [sonum, uuendaSonum]  = useState("Lisa toode!");
  const inputiLuger = useRef();  
  const hindViide = useRef();
  const piltViide = useRef();
  const aktiivneViide = useRef();
  

//ref loeb inputi sees väärtusi. const nimiRef ´useRef()
// const nimiViide = useRef();  Panen üksõik millise nimetuse (nimiViide)

  //function lisa() {}

  const lisa = () => {
    if (inputiLuger.current.value === "") {
      uuendaSonum("Toodet ei saa tühja nimega lisada.");

    } else {
      uuendaSonum("Toode lisatud, nimega: " + inputiLuger.current.value);

      const uusToode = {
        "nimi": inputiLuger.current.value, 
        "hind": Number(hindViide.current.value), 
        "aktiivne": aktiivneViide.current.checked, 
        "pilt": piltViide.current.value
      }
      tootedFailist.push(uusToode);
    }
    
  }

  return (
    <div>
      <div>{sonum}</div>
      <label> Uue toote nimi</label>
      <input ref={inputiLuger} type="text" /> <br />
      <label> Uue toote hind</label>
      <input ref={hindViide} type="number" /> <br />
      <label> Uue toote pilt</label>
      <input ref={piltViide} type="text" /> <br />
      <label> Uue toote aktiivsus</label>
      <input ref={aktiivneViide} type="checkbox" /> <br />
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
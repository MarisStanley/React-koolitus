import React, { useState} from 'react'

function Avaleht() {
  const [kogus, uuendaKogus] = useState(12);
  const [laigitud, uuendatLaigitud] = useState(false);
  const [sonum, uuendaSonum] = useState("Uuenda kogust!");
   

  function vahenda() {
    uuendaKogus(kogus - 1);
    uuendaSonum("Vähendasid kogust!");
  }

  function suurenda() {
    uuendaKogus(kogus + 1);
    uuendaSonum("Suurendasid kogust!");
  }

  function nulli() {
    uuendaKogus(0);
    uuendaSonum("Panid tagasi nulli!");
  }

  return (
    <div>

      { laigitud === true && <img src="laigitud.svg" alt="" />}
      { laigitud === false && <img src="mittelaigitud.svg" alt="" />}
      <span>{laigitud + 0}</span>
      <button onClick={() => uuendatLaigitud(true)}>Muuda laigituks</button>
      <button onClick={() => uuendatLaigitud(false)}>Muuda mittelaigituks</button>
      

      <br /> <br />
      <div>{sonum}</div>
      { kogus !== 0 && <button onClick={ () => uuendaKogus(0)}>Tagasi nulli</button>}
      <button onClick={ () => uuendaKogus(kogus - 1)}>-</button>
      <span>kogus: {kogus} tükki</span>
      <button onClick={ () => uuendaKogus(kogus + 1)}>+</button>

      <br /> <br />

      


    </div>
  )
}

export default Avaleht

// kogus on muutuja. uuendaKogus on funktsioon, mis hakkab uuendama muutujat.
//loogelised sulud tähistavad JSi. Kogus on viide JSile ja sõnad peavad olema samad. kogus ja {kogus}. 
//Kõik, mis on loogeliste sulgude vahel peab olema returni ja functioni vahel olemas. Kogus on see, mida kasutan HTMLis.
//
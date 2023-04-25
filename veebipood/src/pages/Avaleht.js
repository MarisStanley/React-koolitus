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
      { kogus !== 0 && <button onClick={nulli}>Tagasi nulli</button>}
      <button onClick={ vahenda}>-</button>
      {/* <span className={kogus >= 15 && 'kuldne'}>kogus: {kogus} tükki</span> */}
      <span className={kogus >= 15 ? 'kuldne' : undefined}>kogus: {kogus} tükki</span>
      <button onClick={suurenda}>+</button>

      <br /> <br />
      {/* ? ja : ternary operator. Luhendatud if else kujuga.  if kogus on suurem kui 15, vota kasutusele tuhjus. ? on siis tõsi ja : väär*/}
      


    </div>
  )
}

export default Avaleht

// kogus on muutuja. uuendaKogus on funktsioon, mis hakkab uuendama muutujat.
//loogelised sulud tähistavad JSi. Kogus on viide JSile ja sõnad peavad olema samad. kogus ja {kogus}. 
//Kõik, mis on loogeliste sulgude vahel peab olema returni ja functioni vahel olemas. Kogus on see, mida kasutan HTMLis.
//
import React, {useState} from 'react'
import tegevusedFailist from '../data/tegevused.json'

function Tegevused() {
    const  [tegevused, uuendaTegevused] = useState(tegevusedFailist);

    const n2itaKasutajaYks = () => {
        const vastus = tegevused.filter(el => el.userId === 1);
        uuendaTegevused(vastus);
    }

    const n2itaKasutajaKaks = () => {
        const vastus = tegevused.filter(el => el.userId === 2);
        uuendaTegevused(vastus);
    }

    const n2itaKasutajaKolm = () => {
        const vastus = tegevused.filter(el => el.userId === 3);
        uuendaTegevused(vastus);
    }

    const n2itaValmisTegevused = () => {
        const vastus = tegevused.filter(el => el.completed === true);
        uuendaTegevused(vastus);
    }

    const n2itaMitteValmisTegevused = () => {
        const vastus = tegevused.filter(el => el.completed === false);
        uuendaTegevused(vastus);
    }

    const n2itaTgaAlgavaid = () => {
        const vastus = tegevused.filter(el => el.title.startsWith("t"));
        uuendaTegevused(vastus);
    }

    const n2itaRohkemKui20 = () => {
        const vastus = tegevused.filter(el => el.length > 20); 
        uuendaTegevused(vastus);
    }

    const n2itaK6iki = () => {
        uuendaTegevused(tegevusedFailist);
    }


  return (
    <div>
        <div>Näita kogu tegevuse arvu .length abil</div>
    <button onClick={() => n2itaKasutajaYks()}>Kuva kõik kasutaja ID 1 tegevused</button>
    <button onClick={() => n2itaKasutajaKaks()}>Kuva kõik kasutaja ID 2 tegevused</button>
    <button onClick={() => n2itaKasutajaKolm()}>Kuva kõik kasutaja ID 3 tegevused</button>
    <button onClick={() => n2itaValmisTegevused()}>Kuva kõik valmis tegevused</button>
    <button onClick={() => n2itaMitteValmisTegevused()}>Kuva kõik mittevalmis tegevused</button>
    <button onClick={() => n2itaTgaAlgavaid()}>Kuva kõik "t" tähega algavad tegevused</button>
    <button onClick={() => n2itaRohkemKui20()}>Kuva tegevused, millel on tähemärke rohkem kui 20</button>
    <button onClick={() => n2itaK6iki()}>Kuva kõik tegevused tagasi</button>

        {tegevused.map(el => 
        <div>
          <div>{el.userId}</div>
          <div>{el.id}</div>
          <div>{el.title}</div>
          <div>{el.completed}</div>
          <br />
        </div>)}
    </div>
  )
}

export default Tegevused
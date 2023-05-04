import React, { useState } from 'react'

function Tootajad() {
    const [tootajad, uuendaTootajad] = useState(["Maret", "Meeli", "Vladim", "Kristel", "Kristin", "Teele", "Kristina"]);
    const [koguSumma, uuendaKogusumma] = useState(0);
    const sorteeriAZ = () => {
        tootajad.sort();
        uuendaTootajad(tootajad.slice());
    }

        
    const filtreeriKellelOnRohkemKui12Tahte = () => {
        const vastus = tootajad.filter(e => e.length > 6); // kui on true, jatab alles
        uuendaTootajad(vastus);


    }

    const arvutaKoikTahedKokku = () => {
        let summa = 0;
        tootajad.forEach(e => summa = summa + e.length);
        uuendaKogusumma(summa);
    }

    const kustuta = (i)  =>  {
        tootajad.splice(i,1);
        uuendaTootajad(tootajad.slice());
    }

  return (
    <div>
        <div>Koik tahed kokku: {koguSumma}tk  </div>
        <button onClick={arvutaKoikTahedKokku}>Arvuta</button>
        <br />
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={filtreeriKellelOnRohkemKui12Tahte}>Filtreeri</button>
        { tootajad.map((e, i) => <div>{e} <button onClick={() => kustuta(i)}>x</button></div>)}
    </div>
  )
}
// Maret =>      =  0 + 5
// Maret =>    5  =  0 + 5  esimene 5on uus vaartus
// Vadim =>    10  =  5 + 5
// Kristel =>    17  =  10 + 7

//useState on HTMLi muutmiseks


export default Tootajad
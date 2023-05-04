import React, { useState } from 'react'

function Hinnad() {
  const [hinnad, uuendaHinnad] = useState([64, 12, 52, 5, 87, 552, 123, 15]);
  const [koguSumma, uuendaKogusumma] = useState();

  const sorteeriKasvavalt = () => {
    //          64  12  => 64-12= pluus vaheta koht
    //          12  52  => 12-52 = miinus 'ra vaheta kohta
    hinnad.sort((a,b) => a - b);  // siin ei tee default sort. seega taidan sulud
    uuendaHinnad(hinnad.slice());
  }

  const filtreeriVaiksemKui100 = () => {
    const vastus = hinnad.filter(el => el < 100); // siin ma ei kirjuta.length el ise on vaiksem kui 100
    uuendaHinnad(vastus);
  }


  const arvutaKoikKokku = () => {
    let summa = 0;
    hinnad.forEach(el => summa = summa + el);
    uuendaKogusumma(summa);
}
  return (
    <div>
      <div>Kogusumma: {koguSumma}</div>
      <button onClick={arvutaKoikKokku}>Arvuta</button>
      
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={filtreeriVaiksemKui100}>Jata alles vaiksemad kui 100</button>
      { hinnad.map(el => <div>{el}</div>)}
    </div>
  )
}

export default Hinnad
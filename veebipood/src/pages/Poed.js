import React, { useState } from 'react'
import poedFailist from "../data/poed.json";

function Poed() {
  const [poed, uuendaPoed] = useState(poedFailist);

  const tagasi = () => {
    uuendaPoed(poedFailist);
  }  

const sorteeriAZ = () => {
  poed.sort((a,b) => a.localeCompare(b)); //saab teha ka defaulti
  uuendaPoed(poed.slice()) ;

}
const sorteeriZA = () => {
  poed.sort((a,b) => b.localeCompare(a)); 
  uuendaPoed(poed.slice()) ;

}
const sorteeriTahedKasv = () => {
  poed.sort((a,b) => a.length - b.length); 
  uuendaPoed(poed.slice()) ;
  
  
}
const sorteeriTahedKah = () => {
  poed.sort((a,b) => b.length - a.length); 
  uuendaPoed(poed.slice()) 
  
}
const sorteeriKolmasTahtAZ = () => {
  poed.sort((a,b) => a[2].localeCompare(b[2]));  //2  on kolmas taht
  uuendaPoed(poed.slice()) 

}

  const filtreeriSisaldabIsLyhendit = () => {
   const vastus = poed.filter(yksPood => yksPood.endsWith("is"));
   uuendaPoed(vastus);
  }
  
  const filtreeriKolmasTahtI = () => {
    const vastus = poed.filter(yksPood => yksPood[2] === "i");
    uuendaPoed(vastus);
  }
  
    
  

  const filtreeriL6pebEga = () => {
    const vastus = poed.filter(yksPood => yksPood.endsWith("e"));
    uuendaPoed(vastus);
  }
  
  const kustuta = (jrknr)  =>  {
    poed.splice(jrknr,1);
    uuendaPoed(poed.slice());
}

  return (
    <div>
      <br />
      <button onClick={tagasi}>Reseti filtrid</button>
      <dir>Poode on: {poed.length} tk</dir>
      <br /><br />
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahedKasv}>Sorteeri tähtede arv kasvavalt</button>
      <button onClick={sorteeriTahedKah}>Sorteeri tähtede arv kahanevalt</button>
      <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht A-Z</button>
      <br />
      <button onClick={filtreeriKolmasTahtI}>Filtreeri kolmas täht</button>
      <button onClick={filtreeriL6pebEga}>Filtreeri e-ga lõppevad</button>
      <button onClick={filtreeriSisaldabIsLyhendit}>Filtreeri</button>
      
      
      {poed.map((yksPood, jrknr) => <div>{yksPood} <button onClick={()=> kustuta(jrknr)}>x</button></div>)} 

      </div>
  )
}

export default Poed


import React, { useState } from 'react'

function Poed() {
  const [poed, uuendaPoed] = useState(["Ülemiste", "Viimsi", "Rocca Al Mare", "Magistrali", "Vesse", "Kristiine", "Järveotsa"])
  

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
  


  return (
    <div>
      <br />
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahedKasv}>Sorteeri tähtede arv kasvavalt</button>
      <button onClick={sorteeriTahedKah}>Sorteeri tähtede arv kahanevalt</button>
      <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht A-Z</button>
      <br />
      <button onClick={filtreeriKolmasTahtI}>Filtreeri kolmas täht</button>
      <button onClick={filtreeriL6pebEga}>Filtreeri e-ga lõppevad</button>
      <button onClick={filtreeriSisaldabIsLyhendit}>Filtreeri</button>
      
      
      {poed.map(yksPood => <div>{yksPood}</div>)} 
      </div>
  )
}

export default Poed


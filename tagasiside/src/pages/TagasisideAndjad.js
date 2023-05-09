import React, {useRef, useState} from 'react'
import nimedFailist from "../data/tagasisideAndjad.json"


function TagasisideAndjad() {
    const salvestaNimi = useRef();
    const [tagasiside, uuendaTagasiside] = useState(nimedFailist);
    const [tahed, tahedKokku] = useState(0);

    

    const salvesta = () => {
      tagasiside.push(salvestaNimi.current.value);
      uuendaTagasiside(tagasiside.slice());
  }

    const muuda = (index)  => {
        nimedFailist.splice(index, 1);
           uuendaTagasiside(nimedFailist.slice());
     }

     const arvutaKoikNimedKokku = () => {
       let summa = 0;
       tagasiside.forEach(e => summa = summa + e.length);
       tahedKokku(summa);
  }

    const filtreeriAlgabMga = () => {
      const vastus = tagasiside.filter(nimi => nimi.startsWith("M"));
      uuendaTagasiside(vastus);
  }

    const filtreeriNimePikkus6tahte = () => {
      const vastus = tagasiside.filter(el => el.length === 6); 
      uuendaTagasiside(vastus) ;
  }

    const filtreeriLopebYga = () => {
      const vastus = tagasiside.filter(el => el.endsWith("y")); 
      uuendaTagasiside(vastus) ;
  }
    const sorteeriZA = () => {
      tagasiside.sort((a,b) => b.localeCompare(a)); 
      uuendaTagasiside(tagasiside.slice()) ;
  }

    const insertEST = () => {
      const vastus = tagasiside.map(el => "EST-" + el);
      uuendaTagasiside(vastus);
    }
  return (
    <div>
       <div>Koik nimed kokku: {tahed}tk  </div>
        <button onClick={arvutaKoikNimedKokku}>Arvuta</button> 
        <br />
        <label>Lisa:</label>
        <input ref={salvestaNimi}  type='text' />
        <button onClick={() => salvesta()}>Sisesta</button>
        <br /> <br />
        <button onClick={filtreeriAlgabMga}>Algab "M"-ga</button>
        <button onClick={filtreeriNimePikkus6tahte}>Nime pikkus 6 tähte</button>
        <button onClick={filtreeriLopebYga}>Lõpeb "y"-ga</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={insertEST}>Nime ette "EST"</button>
        <br />
        {tagasiside.map((element, index) => <div>{element} <button onClick={() => muuda(index)}>x</button> </div>)}
    </div>
  )
}

export default TagasisideAndjad
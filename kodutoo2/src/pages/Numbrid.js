import React, {useState} from 'react'

function Numbrid() {
    const [numbrid, uuedNumbrid] = useState([4, 23, 7, 39, 19, 0, 9, 14, 17, 44]);

    const tagasi = () => {
      uuedNumbrid([4, 23, 7, 39, 19, 0, 9, 14, 17, 44]);
    }
    
    const sorteeri09 = () => {
        numbrid.sort((a,b) => a.toString().localeCompare(b.toString())); 
        uuedNumbrid(numbrid.slice()) ;
      
      }
    const sorteeri90 = () => {
        numbrid.sort((a,b) => b.toString().localeCompare(a.toString())); 
        uuedNumbrid(numbrid.slice()) ;

      }

    const sorteeriKasvavalt = () => {
        numbrid.sort((a,b) => a - b);  
        uuedNumbrid(numbrid.slice());

    }

    const sorteeriKahanevalt = () => {
        numbrid.sort((a,b) => b - a);  
        uuedNumbrid(numbrid.slice());

    }


    const filtreeriSuuremKui8 = () => {
        const vastus = numbrid.filter(el => el  > 8); 
        uuedNumbrid(vastus);
      }

    const filtreeriVaiksemKui10 = () => {
        const vastus = numbrid.filter(el => el  < 10); 
        uuedNumbrid(vastus);
      }

      const filtreeriPaarisarvud = () => {
        const vastus = numbrid.filter(el => el % 2 === 0 ); 
        uuedNumbrid(vastus);
      }
      const filtreeriPaaritudarvud = () => {
        const vastus = numbrid.filter(el => el % 2 !== 0 ); 
        uuedNumbrid(vastus);
      }
  return (
    <div>
    <br />
    <button onClick={tagasi}>Reseti filtrid</button>
    <br />
    <button onClick={sorteeri09}>Esimese numbri järgi</button>
    <button onClick={sorteeri90}>Viimase numbri järgi</button>
    <button onClick={sorteeriKasvavalt}>Kasvavalt</button>
    <button onClick={sorteeriKahanevalt}>Kahanevalt</button>
       
       
       <br /><br />
       <button onClick={filtreeriSuuremKui8}>Suurem kui 8</button>
       <button onClick={filtreeriVaiksemKui10}>Väiksem kui 10</button>
       <button onClick={filtreeriPaarisarvud}>Paarisarvud</button>
       <button onClick={filtreeriPaaritudarvud}>Paaritud arvud</button>
       
        {numbrid.map(el => <div>{el}</div>)}

    </div>
  )
}

export default Numbrid
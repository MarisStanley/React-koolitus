import React, {useRef, useState} from 'react'

function Nimed() {
    const lisaSonu = useRef(); 
    const lisaSonu1 = useRef(); 
    const lisaSonu2 = useRef(); 
    const [sonad, uuedSonad] = useState(['shoes', 'shirts', 'socks', 'sweaters','pigs', 'goats', 'sheep', 'spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'March', 'Jan', 'Feb', 'Dec']);

    const tagasi = () => {
      uuedSonad(['shoes', 'shirts', 'socks', 'sweaters','pigs', 'goats', 'sheep', 'spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'March', 'Jan', 'Feb', 'Dec']);
    }  
    
    const kustuta = (index)  => {
        sonad.splice(index, 1);
           uuedSonad(sonad.slice());
     }
    const sorteeriAZ = () => {
        sonad.sort((a,b) => a.localeCompare(b)); 
        uuedSonad(sonad.slice()) ;
      
      }

    const filtreeriRohkemKui4 = () => {
        const vastus = sonad.filter(el => el.length > 4); 
        uuedSonad(vastus);
      }

      const salvesta = (element) => {
        sonad.push(lisaSonu.current.value);
        sonad.push(lisaSonu1.current.value);
        sonad.push(lisaSonu2.current.value);
        uuedSonad(sonad.slice())
        
    }

  return (

    <div>
      <br />
      <button onClick={tagasi}>Reseti filtrid</button>
      <br /><br />
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={filtreeriRohkemKui4}>Rohkem kui 4 tähemärki</button>
      <div>
        <br />
        <label>Lisa:</label>
        <input ref={lisaSonu}  type='text' />
        <br />
        <label>Lisa:</label>
        <input ref={lisaSonu1}  type='text' />
        <br />
        <label>Lisa:</label>
        <input ref={lisaSonu2}  type='text' />
        <br />
        <button onClick={() => salvesta()}>Sisesta</button>
        <br /> <br />
        </div>
      
      {sonad.map((element, index) => <div>{element}<button onClick={() => kustuta(index)}>x</button></div>)}
    </div>
  )
}

export default Nimed
import React from 'react'
import { useState } from 'react'

function Ostukorv() {
    const [ostukorv, uuendaOstukorv] = useState(JSON.parse(localStorage.getItem("cartLaptops")) || [] );

    const kustuta = ( index)=> {
        ostukorv.splice(index, 1);
        uuendaOstukorv(ostukorv.slice());
        localStorage.setItem("cartLaptops", JSON.stringify(ostukorv));

    }
  return ( <div>
    <div>Ostukorv</div>

    <div>
            
                {ostukorv.map((ostukorviEse, index) =>
                    <div key={index}>
                        <div>{ostukorviEse.mark}</div>
                        <div>{ostukorviEse.mudel}</div>
                        <div>{ostukorviEse.maksumus}</div>
                       <button onClick={() => kustuta(index)}>x</button>
                    </div>
              )}

            </div>
            </div>
  )
}

export default Ostukorv
import React, { useState } from 'react'
import { useRef } from 'react'

function LisaUudis() {
  const [sonum, uusSonum] = useState("")
  const uudiseRef = useRef();

    const lisaUusUudis = () => {
        let uudised = JSON.parse(localStorage.getItem("uudised")) || [];
        uudised.push(uudiseRef.current.value);
        localStorage.setItem("uudised", JSON.stringify(uudised));
    }

    // const kontrolli = () => {
    //   if (uudiseRef.current.valuecharAt(0) === uudiseRef.current.value.charAt(0).toLowerCase()) {
    //     uusSonum("Sisestasid uudise väikse tähega. Palun paranda!")
    //   } else {
    //     uusSonum("");
    //   }

    //   if (uudiseRef.cuurent.value.includes("  ")) {
    //     uusSonum("Sisestasid kaks tühikut, palun paranda!")
    //   }else {
    //     uusSonum("")
    //   }
      
    // }

    const kontrolli = () => {
      uusSonum("")

      if (uudiseRef.current.valuecharAt(0) === uudiseRef.current.value.charAt(0).toLowerCase()) {
        uusSonum("Sisestasid uudise väikse tähega. Palun paranda!")
      } 

      if (uudiseRef.cuurent.value.includes("  ")) {
        uusSonum("Sisestasid kaks tühikut, palun paranda!")
      }
      
    }

  return (
    <div>
      <div>{sonum}</div>
        <label htmlFor="">Uudise nimi</label>
        <input onChange={kontrolli} ref={uudiseRef} type="text" />
        <button onClick={() => lisaUusUudis()}>Lisa uudis</button>
    </div>
  )
}

export default LisaUudis
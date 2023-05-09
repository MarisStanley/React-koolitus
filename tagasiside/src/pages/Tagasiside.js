import { useRef, useState } from "react"
import React from 'react'
import tagasisideFailist from "../data/tagasiside.json"



function Tagasiside() {

    const salvestaTagasiside = useRef();

    const [tagasiside, uusTagasiside] = useState(tagasisideFailist);

    const salvesta = () => {
        tagasiside.push(salvestaTagasiside.current.value);
        uusTagasiside(tagasiside.slice());
    }

    const muuda = (index) => {
        tagasisideFailist.splice(index,1);
        uusTagasiside(tagasisideFailist.slice());


    }  
    
    return (
    <div>
        
        <div>Tagasisided:</div>
        {tagasiside.map((element,index) => <div> {element} <button onClick={() => muuda(index)}>x</button></div>)}
        
        <label>Lisa uus tagasiside:</label>
        <input ref={salvestaTagasiside}  type='text' />
        <button onClick={() => salvesta()}>Sisesta</button>
        
        </div>
  )
}

export default Tagasiside
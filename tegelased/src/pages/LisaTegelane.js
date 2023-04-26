import { useRef, useState } from 'react';

function LisaTegelane() {
    const [sonum, uusSonum] = useState("");
    const nimiRef = useRef();

    const lisaUusTegelane= () => {
        if (nimiRef.current.value === "") {
            uusSonum("Tühja nimega ei saa sisestada");

        }else {
            uusSonum("Tegelane lisatud");
            
        }
    }
    
    return ( 
    <div>
        <div>{sonum}</div>
        <label>Lisa Tegelane</label>
        <input ref={nimiRef} type="text" />
        <button onClick={lisaUusTegelane}>Lisa uus</button>


    </div> );
}

export default LisaTegelane;
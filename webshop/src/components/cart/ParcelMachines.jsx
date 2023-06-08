import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

function ParcelMachines() {
    const [parcelMachines, setParchelMachines] = useState([]); //koikuv
    const [dbparcelMachines, setDbParchelMachines] = useState([]); //koguaeg uks ja sama
    //input
    const searchedRef = useRef();


    useEffect(() => {
        fetch("https://www.omniva.ee/locations.json")
            .then(response => response.json())  // kogu tagastus. API päring
            .then(json => {
                setParchelMachines(json || []);
                setDbParchelMachines(json || []);
            })   //võetakse sisu ja pannakse automaati
    }, []);

    const searchFromPMs = () => {
        const result = dbparcelMachines.filter(pm =>
          pm.NAME.toLowerCase().replace("õ", "o")
            .includes(searchedRef.current.value.toLowerCase().replace("õ", "o")));
        setParchelMachines(result)
    
      }

    return (
        <div>
            <input type="text" ref={searchedRef} onChange={searchFromPMs} /><br />
            <select>
                {parcelMachines
                    .filter(pm => pm.ZIP !== "96331")
                    .filter(pm => pm.A0_NAME === "EE")
                    .map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}
            </select>
        </div>
    )
}

export default ParcelMachines
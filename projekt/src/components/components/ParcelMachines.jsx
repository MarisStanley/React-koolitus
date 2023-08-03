import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

function ParcelMachines() {
    const [parcelMachines, setParchelMachines] = useState([]);
    const [dbparcelMachines, setDbParchelMachines] = useState([]);
    const searchedRef = useRef();


    useEffect(() => {
        fetch("https://www.omniva.ee/locations.json")
            .then(response => response.json())
            .then(json => {
                setParchelMachines(json || []);
                setDbParchelMachines(json || []);
            })
    }, []);

    const searchFromPMs = () => {
        const result = dbparcelMachines.filter(pm =>
            pm.NAME.toLowerCase().replace("õ", "o")
                .includes(searchedRef.current.value.toLowerCase().replace("õ", "o")));
        setParchelMachines(result)

    }

    return (
        <div>





            <select className="search-input">
                {searchedRef.current && searchedRef.current.value === "" && (
                    <option value="" required>Select the parcel machine</option>
                )}

                {parcelMachines

                    .filter(pm => pm.ZIP !== "96331")
                    .filter(pm => pm.A0_NAME === "EE")
                    .map(pm => <option key={pm.NAME}>{pm.NAME}</option>)
                }
            </select>
            <br />
            <div>
                <input type="text" ref={searchedRef} onChange={searchFromPMs} placeholder="Search" />
                <div className="invalid-feedback">
                    Please choose the parcel machine.
                </div>
            </div>

        </div>
    )
}

export default ParcelMachines
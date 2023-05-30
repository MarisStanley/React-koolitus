import React from 'react'
import { useState } from 'react'
import userFiles from '../data/users.json'

function Kasutajad() {
    const [kasutaja, uusKasutaja] = useState(userFiles);
    const [numbrid, numbridKokku] = useState(0);

    // const kustuta = (index) => {
    //     userFiles.splice(index, 1);
    //     uusKasutaja(userFiles.slice());
    //  }

    const kustutaFilter = () => {
        uusKasutaja(userFiles)
    }

    const rohkemKui10tahte = () => {
        const vastus = kasutaja.filter(el => el.username.length > 10);
        uusKasutaja(vastus);
    }

    const lucio = () => {
        const index = userFiles.findIndex(el => el.email === "Lucio_Hettinger@annie.ca")
        console.log(index);

    }

    //  const algabCga = () => {
    //     const vastus = userFiles.find(el => el.name.startsWith("C"));
    //     console.log(vastus);
    //  }

    const algabCga = () => {
        const vastus = userFiles.find(el => el.name.substring(0, 1) === "C");
        console.log(vastus);
    }

    const geoLat = () => {
        kasutaja.sort((a, b) => a.address.geo.lat.localeCompare(b.address.geo.lat));
        uusKasutaja(kasutaja.slice());
    }

    const posLng = () => {
        const vastus = userFiles.filter(el => el.address.geo.lng > 0);
        uusKasutaja(vastus);
    }

    //  const liidaKokku = () => {
    //     let summa = 0;
    //     kasutaja.forEach(e => summa = summa + Number(e.id));
    //     console.log(summa);
    //  }

    const liidaKokku = () => {
        let summa = 0;
        kasutaja.forEach(el => { summa += el.id });
        console.log(summa);
    }

    //forEach(user => { sum = sum + user.id })

    const lisa000 = () => {
        const vastus = kasutaja.map(user => ({ ...user, phone: "000" + user.phone }))
        uusKasutaja(vastus);
    }

    const asendaEmailiga = () => {
        const vastus = kasutaja.map(user => user.email);
        console.log(vastus);
        
    }

    const asendaTahed = ()  => {
        const vastus = kasutaja.map(el => (
            {...el, company: {...el.company,catchPhrase: el.company.catchPhrase.replaceAll("a", "e")}}
        ))
        uusKasutaja(vastus)
    }

    return (

        <div>
            <div>{kasutaja.length}</div>
            <div>Koik numbrid kokku: {numbrid}   </div>
            <button onClick={rohkemKui10tahte}>Rohkem kui 10 tähte</button>
            <button onClick={lucio}>Lucio e-mail</button>
            <button onClick={algabCga}>Algab c-ga</button>
            <button onClick={geoLat}>Lat</button>
            <button onClick={posLng}>Lng</button>
            <button onClick={liidaKokku}>Liida kokku</button>
            <button onClick={kustutaFilter}>Nulli</button>
            <button onClick={lisa000}>Lisa 000</button>
            <button onClick={asendaEmailiga}>Asenda e-mailiga</button>
            <button onClick={asendaTahed}>Asenda tahed</button>
            <br />
            {kasutaja.map(element =>
                <div>
                    <div>{element.id}</div>
                    <div>{element.name}</div>
                    <div>{element.username}</div>
                    <div>{element.email}</div>
                    <br />
                    <div>{element.address.street}</div>
                    <div>{element.address.suite}</div>
                    <div>{element.address.city}</div>
                    <div>{element.address.zipcode}</div>
                    <br />
                    <div>{element.address.geo.lat}</div>
                    <div>{element.address.geo.lng}</div>

                    <br />
                    <div>{element.phone}</div>
                    <div>{element.website}</div>
                    <br />
                    <div>{element.company.name}</div>
                    <div>{element.company.catchPhrase}</div>
                    <div>{element.company.bs}</div>



                    {/* <button onClick={() => kustuta(index)}>x</button></div>)} */}


                </div>
            )}
        </div>
    )
}

export default Kasutajad
import { useState } from "react";

function Kontakt() {

    const [n2itaTelKristiine, muudaN2itaTelKristiine] = useState(false);
    const [n2itaTelYlemiste, muudaN2itaTelYlemiste] = useState(false);
    const [n2itaTelTasku, muudaN2itaTelTasku] = useState(false);



    return ( <div>
        <div>See on kontaktide leht , nähtav localhost:3000/kontakt aadressil</div>
        <div>Võta meiega ühendust</div>
        <br />
        <div className={n2itaTelKristiine === true ? "valitud" : undefined} onClick={() => muudaN2itaTelKristiine(!n2itaTelKristiine)}>Kristiine keskus</div>
        {n2itaTelKristiine && <div className="valitud" >+3721542365</div>}
        <div className={n2itaTelKristiine === true ? "valitud" : undefined}>Tallinn</div>
        <br />
        <div className={n2itaTelYlemiste === true ? "valitud" : undefined} onClick={() => muudaN2itaTelYlemiste(!n2itaTelYlemiste)}> Ülemiste keskus</div>
        {n2itaTelYlemiste && <div className="valitud">+3725469357</div>}
        <div className={n2itaTelYlemiste === true ? "valitud" : undefined} >Tallinn</div>
        <br />
        <div className={n2itaTelTasku === true ? "valitud" : undefined} onClick={() => muudaN2itaTelTasku(!n2itaTelTasku)}>Tasku keskus</div>
        {n2itaTelTasku && <div className="valitud">+3721542365</div>}
        <div className={n2itaTelTasku === true ? "valitud" : undefined}>Tartu</div>
    </div> );
}

export default Kontakt;

// Algväärtus (kui lehele tullakse ja midagi pole vajutatud), asub useState sulgude sees. 
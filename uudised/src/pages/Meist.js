import {useState} from 'react';

function Meist() {
    const [kontakt, n2itakontakt] = useState("");

    return ( <div>
        <div>See on meist leht, nähtav localhost:3000/meist aadressil</div>
        <div>Meie töötajad</div>
        ;<br />
        <div>Arvo Pärt</div>
        <div>Uudisklippide taustamuusika</div>
        <button onClick = {() => n2itakontakt(+3725668425)}>Võta ühendust</button>
        <br /> <br />
        <div>Kelly Sildaru</div>
        <div>Püstolreporter</div>
        <button onClick = {() => n2itakontakt(+3725664785)}>Võta ühendust</button>
        <br /> <br />
        <div>Edward von Lõngus</div>
        <div>Uudiste kujundamine</div>
        <button onClick = {() => n2itakontakt(+3725674425)}>Võta ühendust</button>
        <br /> <br />
        <div>Kerli Kõiv</div>
        <div>Välisturgude spetsialist</div>
        <button onClick = {() => n2itakontakt(+3725426825)}>Võta ühendust</button>
        <br /> <br />
        { kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
    </div> );
}

export default Meist;
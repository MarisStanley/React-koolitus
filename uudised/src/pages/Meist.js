import {useState} from 'react';

function Meist() {
    const [kontakt, n2itakontakt] = useState("");
    const tootajad = [{
        nimi: "Arvo",
        ala: "Muusika",
        telefon: "+3725668425"
    },
    {
        nimi: "Kelly",
        ala: "Reporter",
        telefon: "+3725664785"
    },
    {
        nimi: "Edward",
        ala: "Kujundus",
        telefon: "+3725674425"
    },
    {
        nimi: "Kerli",
        ala: "Välisturud",
        telefon: "+3725426825"
    }];

    const [valitud, uuendaValitud] = useState("")

    const v6taYhendust = (tootaja) => {
        n2itakontakt(tootaja.telefon);
        uuendaValitud(tootaja.nimi);
    }

    return ( 
    <div>
        
        <div>See on meist leht, nähtav localhost:3000/meist aadressil</div>
        <div>Meie töötajad</div>
        <br />
        {/* Valitud inimene: {valitud} */}

        <div>{tootajad.map(tootaja =>
        //<div className={tootaja.nimi === valitud && 'nimedBoldiks'}>
        <div className={tootaja.nimi === valitud ? 'nimedBoldiks' : undefined}>
            <div >{tootaja.nimi}</div>
            <div >{tootaja.ala}</div>
            <button onClick={() => v6taYhendust(tootaja)}>Võta ühendust</button>
        </div> )}
        { kontakt !== "" && <div> Tema kontakt: {kontakt}</div> }
        </div>
    </div> );
        
}

export default Meist;

 /* <div>Arvo Pärt</div>
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
        <br /> <br /> */ 
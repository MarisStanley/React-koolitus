import { useState } from 'react';


function Kontakt() {
    const [aadress, määraAadress] = useState("Tallinn");
    const [telefon, määraTelefon] = useState("+3725512345");
    const [email, määraEmail] = useState("bla@baa.com");
    const [ingliseKeelne, määraIngliseKeelne] = useState("ei")
    
    const ingliseks = () => {
        määraAadress("London");
        määraTelefon("+486547564");
        määraEmail("london@london.com");
        määraIngliseKeelne("jah");
    }

    
    
    
    return ( <div>
        <div>{aadress} </div>
        <div>{telefon} </div>
        <div>{email} </div>
        <button onClick={ingliseks}>Tee inglise keelseks</button>
        { ingliseKeelne === "jah" && <div>Leht on inglisekeelne</div> }. 




    </div> );
}

export default Kontakt;
import React, {useRef, useState} from 'react'

function Seaded() {
    const [keel, uuendaKeel] = useState(localStorage.getItem("keel")); 
    //salvestab viimati valitud keele localStorage.getItem(keel)
    
    // null ja undefined - molemad on tuhjysed. 
    //null kujutab ette mis tulema peaks, undefined ei tea.
    const aadressRef = useRef();
    const emailRef = useRef();
    const telefonRef = useRef();

    const salvestaAadress = () => {
        localStorage.setItem("aadress", aadressRef.current.value);
        //setItem paneb midagi localStoragisse. Salvestan aadress votmega, viimane on vaartus,mille ma saadan votmega.
        // est,eng,rus uhe votmega.
    }
    const salvestaEmail = () => {
        localStorage.setItem("email", emailRef.current.value);
    }
    const salvestaTelefon = () => {
        localStorage.setItem("salvestaTelefon", telefonRef.current.value);
    }

    const muudaKeelEst = () =>  {
         uuendaKeel("est");
         localStorage.setItem("keel", "est");

    };
    const muudaKeelEng = () =>  {
         uuendaKeel("eng");
         localStorage.setItem("keel", "eng");


    };
    const muudaKeelRus = () =>  {
         uuendaKeel("rus");
         localStorage.setItem("keel", "rus");
         // keel v]ti, rus, vaartus, uus vaartus kustutab vana. engi peale vajutades kustutatakse est jne. nii, et uksjasama voti. aadress, email ja telefon peavad olema erinevad.


    };

  return (
    <div>
        <label>Aadress</label>
        <input ref={aadressRef} type='text' />
        <button onClick={salvestaAadress}>Salvesta</button>
        <br></br>
        <label>Email</label>
        <input ref={emailRef} type='text' />
        <button onClick={salvestaEmail} >Salvesta</button>
        <br></br>
        <label>Telefon</label>
        <input ref={telefonRef} type='text' />
        <button onClick={salvestaTelefon} >Salvesta</button>
        <br></br>

        <button onClick={muudaKeelEst}>Eestikeelseks</button>
       <button onClick={muudaKeelEng}>To English</button>
        <button onClick={muudaKeelRus}>Pucckuu</button>
        {keel === "est" && <div>Leht on eestikeelne</div>}
        {keel === "eng" && <div>Page is in English</div>}
        {keel === "rus" && <div>Pucckuu rsük</div>}
    </div>
  )
}

//<button onClick={()=> uuendaKeel("eng")}>To English</button>  

export default Seaded
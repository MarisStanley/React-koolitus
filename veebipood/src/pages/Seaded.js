import React, {useRef, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Seaded() {
    const [keel, uuendaKeel] = useState(localStorage.getItem("keel")); 
    //salvestab viimati valitud keele localStorage.getItem(keel)
    
    // null ja undefined - molemad on tuhjysed. 
    //null kujutab ette mis tulema peaks, undefined ei tea.
    
    const emailViide = useRef();
    const telefonViide = useRef();
    const aadressViide = useRef();

    const salvestaAadress = () => {
        if (aadressViide.current.value === "") {
            toast.error("Tühja aadressi ei saa salvestada!");
            return; // funktsioon siit kohast enam edasi ei lähe
          }  // Tammsaare         T                       ===       t
          if (aadressViide.current.value[0].toLowerCase() ===  aadressViide.current.value[0]) {
            toast.error("Väikse algustähega aadressi ei saa salvestada!");
            return;
          }


        localStorage.setItem("aadress", aadressViide.current.value);
        toast.success("Aadress salvestatud");
        //setItem paneb midagi localStoragisse. Salvestan aadress votmega, viimane on vaartus,mille ma saadan votmega.
        // est,eng,rus uhe votmega.
    }
    const salvestaEmail = () => {
        if (emailViide.current.value === "") {
            toast.error("Tühja emaili ei saa salvestada");
            return; 
          }  
          if (emailViide.current.value.includes("@") === false)  {
            toast.error("Kontrolli emaili õigsust.");
            return;
          }


        localStorage.setItem("email", emailViide.current.value);
        toast.success("Email salvestatud");
    }
    const salvestaTelefon = () => {
        if (telefonViide.current.value === "") {
            toast.error("Tühja telefoni ei saa salvestada.");
            return; 
          }  
          if (/^[0-9]*$/.test(telefonViide.current.value) === false) {
            toast.error("Telefoninumber peab koosnema numbritest.");
            return;
          }


        localStorage.setItem("salvestaTelefon", telefonViide.current.value);
        toast.success("Telefon salvestatud");
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
        <input ref={aadressViide} type='text' />
        <button onClick={salvestaAadress}>Salvesta</button>
        <br></br>
        <label>Email</label>
        <input ref={emailViide} type='text' />
        <button onClick={salvestaEmail} >Salvesta</button>
        <br></br>
        <label>Telefon</label>
        <input ref={telefonViide} type='text' />
        <button onClick={salvestaTelefon} >Salvesta</button>
        <br></br>

        <button onClick={muudaKeelEst}>Eestikeelseks</button>
       <button onClick={muudaKeelEng}>To English</button>
        <button onClick={muudaKeelRus}>Pucckuu</button>
        {keel === "est" && <div>Leht on eestikeelne</div>}
        {keel === "eng" && <div>Page is in English</div>}
        {keel === "rus" && <div>Pucckuu rsük</div>}
        <ToastContainer />
          position: "bottom-right",
    </div>
  )
}

//<button onClick={()=> uuendaKeel("eng")}>To English</button>  

export default Seaded
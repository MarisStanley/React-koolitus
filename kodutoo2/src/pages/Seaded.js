import { useState } from "react";


function Seaded() {
    const [kujundus, muudaKujundus] = useState("veebilehe_kujundus")
    //const [kujundus, muudaKujundus] = useState('light_mode')




    const tumeLeht = () => {
        localStorage.setItem("veebilehe_kujundus", "dark_mode");
        muudaKujundus("dark_mode");
    }
    const heleLeht = () => {
        localStorage.setItem("veebilehe_kujundus", "light_mode");
        muudaKujundus("light_mode");
    }
    const sinineLeht = () => {
        localStorage.setItem("veebilehe_kujundus", "blue_mode");
        muudaKujundus("blue_mode");
    }


    return ( 
        <div>
            <button onClick={tumeLeht}>Tume leht </button>
            <button onClick={heleLeht}>Hele leht </button>
            <button onClick={sinineLeht}>Sinine leht </button>
            {kujundus==="dark_mode" && <div>TUME LEHT</div>}
            {kujundus==="light_mode" && <div>HELE LEHT</div>}
            {kujundus==="blue_mode" && <div>SININE LEHT</div>}

            {/* {localStorage.getItem("veebilehe_kujundus")==="dark_mode" && <div>TUME LEHT</div>}
            {localStorage.getItem("veebilehe_kujundus")==="light_mode" && <div>HELE LEHT</div>}
            {localStorage.getItem("veebilehe_kujundus")==="blue_mode" && <div>SININE LEHT</div>} */}

        </div>
     );
}

export default Seaded;
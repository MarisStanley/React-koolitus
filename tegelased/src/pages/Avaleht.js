import {useState} from 'react'

function Avaleht() {
    const [vaartus, uusVaartus] = useState("");

    const tegelased = [
        {eesnimi: "Mickey", perekonnanimi: "Mouse", elukoht: "Disneyland"},
        {eesnimi: "Minnie", perekonnanimi: "Mouse", elukoht: "Disneyland"},
        {eesnimi: "Winnie", perekonnanimi: "Pooh", elukoht: "Hundred Acre Wood"},
        {eesnimi: "Roo", perekonnanimi: "Kangaroo", elukoht: "Hundred Acre Wood"},
        {eesnimi: "Scooby", perekonnanimi: "Doo", elukoht: "Crystal Cove"},
        ];

    const kuvaNimi = (tegelane) => {
        uusVaartus(tegelane.eesnimi);
        } 
    
    
          
    return ( 
     <div>
        

     <br />
     {vaartus !== "" && <div>Klikkisid tegelase {vaartus} peal.</div>}

     {tegelased.map(tegelane => 
      <div> 
       <div>{tegelane.eesnimi}</div>
       <div>{tegelane.perekonnanimi}</div>
       <div>{tegelane.elukoht}</div>
       <button onClick={() => kuvaNimi(tegelane)} >Kuva nimi</button>
     </div> )
     }

     </div>
     );
}

export default Avaleht;
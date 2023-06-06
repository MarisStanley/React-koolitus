import {useState} from 'react'

function Avaleht() {
    const [vaartus, uusVaartus] = useState("");
    

    // const tegelased = [
    //     {eesnimi: "Mickey", perekonnanimi: "Mouse", elukoht: "Disneyland", vanus: 23},
    //     {eesnimi: "Minnie", perekonnanimi: "Mouse", elukoht: "Disneyland", vanus: 22},
    //     {eesnimi: "Winnie", perekonnanimi: "Pooh", elukoht: "Hundred Acre Wood", vanus: 21},
    //     {eesnimi: "Roo", perekonnanimi: "Kangaroo", elukoht: "Hundred Acre Wood", vanus: 7},
    //     {eesnimi: "Scooby", perekonnanimi: "Doo", elukoht: "Crystal Cove", vanus: 6},
    //     ];

    const tegelased = JSON.parse(localStorage.getItem("tegelased")) || [];
    
    const kuvaNimi = (tegelane) => {
        uusVaartus(tegelane.eesnimi);
        } 

    const valiTegelane = (klikitudTegelane) => {
        let valitudLS = JSON.parse(localStorage.getItem("valitudTegelased")) || [];
        valitudLS = JSON.parse(valitudLS) || [];
        valitudLS.push(klikitudTegelane);
        valitudLS = JSON.stringify(valitudLS);
        localStorage.setItem("valitudTegelased", valitudLS);
    }
    
    
          
    return ( 
     <div>
        

     <br />
     {vaartus !== "" && <div>Klikkisid tegelase {vaartus} peal.</div>}

     {tegelased.map(tegelane => 
      <div> 
       <div>{tegelane.eesnimi}</div>
       <div>{tegelane.perenimi}</div>
       <div>{tegelane.elukoht}</div>
       <div>{tegelane.vanus}</div>
       <button onClick={() => valiTegelane(tegelane)}  >Vali</button>
       <button onClick={() => kuvaNimi(tegelane)} >Kuva nimi</button>
     </div> )
     }

     </div>
     );
}

export default Avaleht;
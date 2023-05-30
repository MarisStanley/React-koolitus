import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ostukorvFailist from "../data/ostukorv.json"


function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState(ostukorvFailist);

  const kustuta = (index) => {
    ostukorvFailist.splice(index,1)  
    uuendaOstukorv(ostukorvFailist.slice());
    //uuendaOstukorv([...ostukorv]) ;
         //.sort()  .filter()  .slice()   .map()  .splice()
  }

  const arvutaKokku = () => {
    let summa = 0;
    ostukorv.forEach(element => summa = summa + element.product.hind * element.quantity);
    return summa;
  }



  const vahendaKogust = (index) => {
    ostukorvFailist[index].quantity--;
    if (ostukorvFailist[index].quantity === 0) {
      kustuta(index);
    }
    uuendaOstukorv(ostukorvFailist.slice());

  }

  const suurendaKogust = (index) => {

    ostukorvFailist[index].quantity++;
    uuendaOstukorv(ostukorvFailist.slice());
  }


  return (
    <div>
      {ostukorv.length > 0 &&<div>Ostukorvis on {ostukorv.length}  eset.</div>}
      {ostukorv.map((toode, index) => (
      <div  >
        <img className="pilt" src={toode.product.pilt}  alt=""  />
       <div>{toode.product.nimi}</div> 
       <div>{toode.product.hind} €</div> 
       <button onClick={() =>  vahendaKogust(index)}>-</button>
       <div>{toode.quantity} tk</div> 
       <button onClick={() =>  suurendaKogust(index)}>+</button>
       <div>{toode.product.hind * toode.quantity}€</div> 
         <button onClick={() => kustuta(index)}>x</button>
         </div>))}   
      {ostukorv.length === 0 && <div>Ostukorv on tühi. <Link to="/">Tooteid lisama</Link></div>}
      <div>Kokku: {arvutaKokku()}</div>
    </div>
  )
}

export default Ostukorv
import React from 'react'

function Meist() {
   // const aadress = localStorage.getItem("aadress");
   const aadress = localStorage.getItem("aadress");
   const email = localStorage.getItem("email");
   const telefon = localStorage.getItem("telefon");
  return (
    <div>M
        <div>Meie aadress: {aadress}</div>
        <div>Meie e-mail: {email}</div>
        <div>Meie telefon: {telefon}</div>
    </div>
  )
}

export default Meist
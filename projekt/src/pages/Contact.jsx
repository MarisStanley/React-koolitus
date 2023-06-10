import React, { useState } from 'react'

function Contact() {
  const [aadress, määraAadress] = useState("Tallinn");
    const [telefon, määraTelefon] = useState("+3725512345");
    const [email, määraEmail] = useState("bla@baa.com");


  return (
    <div>
       <div>{aadress} </div>
        <div>{telefon} </div>
        <div>{email} </div>
    </div>
  )
}

export default Contact
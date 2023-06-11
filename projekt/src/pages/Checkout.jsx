import React from 'react'
import ParcelMachines from '../../src/components/components/ParcelMachines'

function Checkout() {
  return (
    <div>
      <label htmlFor="">Name</label> <br />
      <input type="text"  /> <br />
      <label htmlFor="">Phone number</label> <br />
      <input type="number"  /> <br />
      <label htmlFor="">E-mail</label> <br />
      <input type="text"  />
      <br /> <br /> <br />
        <ParcelMachines />
    </div>
  )
}

export default Checkout
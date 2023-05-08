import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json";

function YksikToode() {
    const { index } = useParams();
    const leitud = tootedFailist[index];
  return (
    <div>
      <img src={leitud.pilt} alt=""  />
    <div>Nimetus: {leitud.nimi}</div>
    <div>Hind: {leitud.hind}</div>
    
    <div>Jarjekorranumber: {index}</div>
    <div>Kirjeldus: ...</div>
    <div>Omadused: ...</div>
    </div>
  )
}

export default YksikToode
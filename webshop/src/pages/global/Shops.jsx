import { useEffect, useState } from 'react';
import Map from '../../components/Map';
import config from "../../data/config.json"
import { Button } from '@mui/material';

function Shops() {
   const [coordinates, setCoordinates] = useState({lngLat: [58.9875, 25.5341], zoom: 7});
  const [shop, setShop] = useState([])
  

  useEffect(() => {
    fetch(config.shopsDbUrl)
    .then(res => res.json())
    .then(json => setShop(json || []))
    
  }, []);
    
  

  return (<div>
    
    <div> {shop.map(item => <div key={item.name}> <Button onClick={() => setCoordinates({lngLat: [item.lat, item.lng], zoom: 13} )}>{item.name}</Button></div>)}
    
    
    {/* {lngLat: [58.9875, 25.5341], zoom: 7} */}
    {/* <button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik Tallinna poed</button>
    <button onClick={() => setCoordinates({lngLat: [59.4277, 24.7193], zoom: 13})}>Kristiine</button>
    <button onClick={() => setCoordinates({lngLat: [59.4231, 24.7991], zoom: 13})}>Ülemiste</button>
    <button onClick={() => setCoordinates({lngLat: [58.3780, 26.7308], zoom: 13})}>Tasku</button> */}
    
    </div>
    <Map mapCoordinates={coordinates}  />
  </div>)
}

export default Shops;
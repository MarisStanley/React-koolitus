

import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ChangeView from './ChangeView';
import { useEffect, useState } from 'react';
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25,41], 
  iconAnchor: [12,41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map(props) {
 


  

  return (
  <div>
  
<MapContainer  className='map ' center={props.mapCoordinates.lngLat} zoom={props.mapCoordinates.zoom} scrollWheelZoom={false}>
      <ChangeView center={props.mapCoordinates.lngLat} zoom={props.mapCoordinates.zoom} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
     
      <Marker position={[34.0088, -118.4941]}>
        <Popup>
          The Beach Shop. <br /> Open 10-21
        </Popup>
      </Marker>
    </MapContainer>
    
  </div>)
}

export default Map; 
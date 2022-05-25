import React from 'react';
import { Map, Marker, Popup, TileLayer} from 'react-leaflet';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapIP = props =>{
  
  const iconL = new Leaflet.Icon({
    iconUrl: '../../public/images/marcador.svg',
    iconSize: [50,50]
  })
  
  const lat = props.lat;
  const lng= props.lng;
  
  return(
    <div id='container-map'>
    { props.lat && props.lng ? 
      <Map center={[lat, lng]} zoom={20} style={{ height: '65vh', width: '100vw' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[lat, lng]} icon={iconL} />
      </Map> :
      ''
    }
    </div>
  )
};

export default MapIP;

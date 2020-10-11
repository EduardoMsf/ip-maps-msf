import React, { useState, useEffect } from 'react';
import InfoIP from './InfoIP';
import MapIP from './Map';
import Spinner from './Spinner';
import NotFound from './NotFound';

const IP = props =>{
  
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [datos, setDatos] = useState();

  useEffect(()=>{
    fetch(`https://geo.ipify.org/api/v1?apiKey=at_D0e1OxZ8Y8wSR1zbHKmdnnh8atRGr&ipAddress=${props.ip}`)
      .then(res => res.json())
      .then(data => {
          if(data){
            setDatos(data);
          }
      })
  },[])

  return(
    <div>
      {datos ?
        <div>
          
          <InfoIP
            ip={datos.ip}
            city={datos.location.city}
            timezone={datos.location.timezone}
            postalcode={datos.location.postalCode}
            isp={datos.isp}
          />
          <MapIP lat={datos.location.lat} lng={datos.location.lng} />
        </div>
        : <Spinner/>
        
      }
      { datos === null && <NotFound/>}
    </div>
  )
};

export default IP;
import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const containerStyle = {
    height: '300px',
    width: '275px',

  };
  

  function Map({center}) {
    
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDj5H1CdfKHJhQ1DCt3voAEQb3Pfh0-e0M"
  })

  const [map, setMap] = useState(null);

  const onLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    setMap(map)
  };

  const onUnmount = () => {
    setMap(null)
  };

  const markerPosition = {
    lat: Number(center.lat),
    lng: Number(center.lng),
  };

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={markerPosition} />
        <></>
      </GoogleMap>
  ) : <></>

  }
export default Map
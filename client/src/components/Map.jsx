import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const containerStyle = {
    height: '100%',
    width: '100%',
    opacity: '70%'
  };

  function Map({center}) {
    
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDj5H1CdfKHJhQ1DCt3voAEQb3Pfh0-e0M"
  })

  const [map, setMap] = useState(null);

  const onLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds({ lat: center.lat -0.02, lng: center.lng  -0.02 });
    // Ajustar el zoom y la posición del mapa (HACIA LA IZQUIERDA DEL MARKER)
    map.setZoom(12);
    map.panTo({ lat: center.lat -0.02, lng: center.lng  -0.02 });
    setMap(map);
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
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center} />
        <></>
      </GoogleMap>
  ) : <></>

  }
export default Map
import React from 'react'
import { GoogleMap, LoadScriptNext, Marker } from '@react-google-maps/api'

const Map = () => {

    const containerStyle = {
        width: '362px',
        height: '520px',
        borderRadius: '16px'
      };
      
      const center = {
        lat: 41.673080,
        lng: -71.271670
      };

      const onLoad = marker => {
        console.log('marker: ', marker)
      }
      

  return (
    <LoadScriptNext
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
    >
        <GoogleMap
            id='map-example'
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <Marker
            onLoad={onLoad}
            position={center}
            animation={2}
          />
        </GoogleMap>

    </LoadScriptNext>
  )
}

export default Map;

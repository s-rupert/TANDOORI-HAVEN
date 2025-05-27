import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '300px'
};

const center = {
  lat: 43.5890, 
  lng: -79.6441
};

const LocationMap = () => {
  return (
    <LoadScript googleMapsApiKey={`${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default LocationMap;

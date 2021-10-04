import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from './mapStyles';
import { FaExclamationCircle } from 'react-icons/fa';

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "100vh",
};
const center = {
  lat: -33.868820,
  lng: 151.209290,
}
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
}
export default function MapView(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAVykwMDy5QSyYbt628pcA-54_Q6N0XWsI",
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);

  const onMapClick = React.useCallback((event) => {
    new Date().toISOString()
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, [])

  if (loadError) return "Error loading map";
  if (!isLoaded) return "Loading map";
  return <div>
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={8}
      center={center}
      options={options}
      onClick={onMapClick}
    >
      {markers.map((marker) => (<Marker key={marker.time.toISOString()}
        position={{ lat: marker.lat, lng: marker.lng }}
        icon={{
          url: "./googleMarker.svg",
          scaledSize: new window.google.maps.Size(30, 30),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(15, 15),
        }}
      />
      ))}
    </GoogleMap>
  </div>
}

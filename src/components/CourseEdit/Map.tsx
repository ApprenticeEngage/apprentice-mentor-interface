import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css"
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const position: LatLngTuple = [51.505, -0.09];

const Map = () => {
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true} className="h-[50vh] w-[100vh]">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;

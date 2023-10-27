import { Button } from "@mui/material";
import { LatLng, latLng, LatLngTuple } from "leaflet";
import { IoCheckbox, IoWarning } from "react-icons/io5";
import "leaflet/dist/leaflet.css";
import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect,
} from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { green } from "@mui/material/colors";

//global var to be stored in DB
let selectedposition;

function DraggableMarker() {
  const [draggable, setDraggable] = useState(false);
  const [position, setPosition] = useState(null);
  const markerRef = useRef(null);
  //selected pos to be saved
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [bbox, setBbox] = useState([]);

  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      const radius = e.accuracy;
      const circle = L.circle(e.latlng, radius);
      circle.addTo(map);
      setBbox(e.bounds.toBBoxString().split(","));
    });
  }, [map]);

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
          selectedposition = marker.getLatLng();
        }
      },
    }),
    []
  );
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  return position === null ? null : (
    <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    >
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable
            ? "Marker is draggable"
            : "Click here to make marker draggable"}
        </span>
      </Popup>
    </Marker>
  );
}

const Map = () => {
  const [showIcon, setShowIcon] = useState(false);

  const handleButtonClick = () => {
    if(selectedposition === undefined){
      setShowIcon(false)
    }else{
      setShowIcon(true);
      console.log(selectedposition);
    }
    
  };

  return (
    <div className="w-full flex flex-row items-center">
      <MapContainer
        center={[31.295026, 70.922667]}
        zoom={13}
        scrollWheelZoom={true}
        className="h-[50vh] w-[100vh]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DraggableMarker />
      </MapContainer>
      <div className="flex flex-row justify-start items-center">
        <button
          className="bg-card-dark h-fit rounded-lg p-5 ml-5 font-bold"
          onClick={handleButtonClick}
        >
          Confirm position!
        </button>
        {showIcon ? (
          <IoCheckbox size={30} color={green} />
        ) : (
          <div>
            <IoWarning size={30} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Map;

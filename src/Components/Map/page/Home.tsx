import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  Polygon,
  Circle,
  FeatureGroup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useRef } from "react";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "../css/Home.css";
import blue from "../images/blue.png";
import blueoffline from "../images/blueoffline.png";
import blueonline from "../images/blueonline.png";
import gray from "../images/gray.png";
import grayonline from "../images/grayonline.png";
// import {useState} from "react";
import devices from "../data/devices.json";



let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const markerIcons = [
  new L.Icon({
    iconUrl: require("../images/gray.png"),
    iconSize: [35,45],
  }),
  new L.Icon({
    iconUrl: require("../images/blue.png"),
    iconSize: [35,45],
  }),
  new L.Icon({
    iconUrl: require("../images/grayonline.png"),
    iconSize: [35,45],
  }),
  new L.Icon({
    iconUrl: require("../images/blueonline.png"),
    iconSize: [35,45],
  }),
  new L.Icon({
    iconUrl: require("../images/blueoffline.png"),
    iconSize: [35,45],
  })
]

const markerIcon1 = new L.Icon({
  iconUrl: require("../images/gray.png"),
  iconSize: [35,45],
});
const markerIcon2 = new L.Icon({
  iconUrl: require("../images/blue.png"),
  iconSize: [35,45],
});
const markerIcon3 = new L.Icon({
  iconUrl: require("../images/grayonline.png"),
  iconSize: [35,45],
});
const markerIcon4 = new L.Icon({
  iconUrl: require("../images/blueonline.png"),
  iconSize: [35,45],
});
const markerIcon5 = new L.Icon({
  iconUrl: require("../images/blueoffline.png"),
  iconSize: [35,45],
});
// const polygon = [
//     [28.63196, 77.22054],
//     [28.63196, 75.25054],
//     [28.13196, 76.28054],
//   ]


function home(this: any) {
  const HandleClickMap = () => {
    return null;
  };
  // const PolygonMap = () => {
  //   const [center, setcenter] = useState({ lat: 13.85, lng: 100.57 });
  //   const ZOOM_LEVEL = 12;
  //   const mapRef = useRef();

  //   const _onCreate = e => {
  //     console.log(e);
  //   };

  //   const _onDeleted = e => {
  //     console.log(e);
  //   };

  const MapEvents = () => {
    useMapEvents({
      click(e) {
        // setState your coords here
        // coords exist in "e.latlng.lat" and "e.latlng.lng"
        console.log(e.latlng.lat);
        console.log(e.latlng.lng);
      },
    });
    return false;
  }
  
  return (
    <div>
      
      <MapContainer
        style={{ height: "100vh" }}
        center={[13.85, 100.57]}
        zoom={13}
        scrollWheelZoom={true}
      >
        
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <HandleClickMap />
        

        {
          devices.data.map((data) => {
            return (
              <Marker position={[data.position[0], data.position[1]]} icon={markerIcons[data.id_markericon]} key={data.id}>
                
                <Popup>
                  หมายเลขอุปกรณ์
                  <div className="p-2 bg-light border"></div>
                  <br />
                  ที่อยู่ที่ติดตั้ง
                  <div className="p-2 bg-light border"></div>
                  <br />
                  อัตราการใช้น้ำ
                  <div className="p-2 bg-light border"></div>
                  <br />
                  อัตราการไหล
                  <div className="p-2 bg-light border"></div>
                  <br />
                  สภานะอุปกรณ์
                  <div className="p-2 bg-light border"></div>
                  <br />
                  แบตเตอรี่
                  <div className="p-2 bg-light border"></div>
                </Popup>
              </Marker>
              
            )
          })
        }

      </MapContainer>
      <div className="bottom-right">
        
        <div className="onoff">
          <img src="../images/gray.png" />
          <img/>
          <p>  จุดติดตั้งมาตรวัดน้ำ</p>
        </div> 
        <div className="onoff">
          <img src="../images/blue.png" />
          <img/>
          <p>  จุดติดตั้งมาตรวัดน้ำอัจฉริยะ</p>
        </div> 
        <div className="onoff">
          <img src="../images/blueoffline.png" />
          <img/>
          <p>  มีความผิดปกติ ณ จุดติดตั้ง</p>
        </div> 
        <div className="onoff">
          <img src="../images/grayonline.png" />
          <img src="../images/blueonline.png" />
          <p>  จุดติดตั้งออนไลน์</p>
        </div> 
        <div className="onoff">
          <img src="../images/gray.png" />
          <img src="../images/blue.png" />
          <p>  จุดติดตั้งออฟไลน์</p>
        </div> 
      </div>
    </div>
  );
}

export default home;

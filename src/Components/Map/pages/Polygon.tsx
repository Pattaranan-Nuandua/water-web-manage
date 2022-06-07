import React from 'react'

export const Polygon = () => {
  return (
    <div>Polygon</div>
  )
}

// import React, { useState } from "react";

// import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
// import { EditControl } from "react-leaflet-draw";

// import { useRef } from "react";
// import "leaflet/dist/leaflet.css";
// import "leaflet-draw/dist/leaflet.draw.css";

// const PolygonMap = () => {
//   const [center, setCenter] = useState({ lat: 24.4539, lng: 54.3773 });
//   const [mapLayers, setMapLayers] = useState([]);

//   const ZOOM_LEVEL = 12;
//   const mapRef = useRef();

//   const _onCreate = (e) => {
//     console.log(e);

//     const { layerType, layer } = e;
//     if (layerType === "polygon") {
//       const { _leaflet_id } = layer;
//   };

//   const _onEdited = (e) => {
//     console.log(e);
//     const {
//       layers: { _layers },
//     } = e;
//   };

//   const _onDeleted = (e) => {
//     console.log(e);
//     const {
//       layers: { _layers },
//     } = e;

//   };
// }

//   return (
//     <>

//       <div>
//         <div>
//           <h2>React-leaflet - Create, edit and delete polygon on map</h2>

//           <div className="col">
//             <MapContainer center={center} zoom={ZOOM_LEVEL} >
//               <FeatureGroup>
//                 <EditControl
//                   position="topright"
//                   onCreated={_onCreate}
//                   onEdited={_onEdited}
//                   onDeleted={_onDeleted}
//                   draw={{
//                     rectangle: false,
//                     polyline: false,
//                     circle: false,
//                     circlemarker: false,
//                     marker: false,
//                   }}
//                 />
//               </FeatureGroup>

//               <TileLayer
//                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               />
//             </MapContainer>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PolygonMap;
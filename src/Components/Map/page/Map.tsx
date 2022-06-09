import React from "react";
import Home from "./Home";
import SidebarMap from "../page/SidebarMap";
import { useState } from "react";
import '../css/AppMap.css'
import Menu from "../../Navbar/Menu-sidebar";
import Header from "../../Navbar/Header";
// import PolygonMap from "./components/pages/Polygon";

function MapEvent() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <div className='App'>
        <Header />
        <Menu />
        <div className="container" style={{marginLeft:'230px' ,width:'85%' }}>
          <div>
          {show ? <SidebarMap /> : null}
          <div className="btnsidebar">
            <button className="btn" onClick={() => setShow(!show)}>
              - ซ่อนตาราง -
            </button>
          </div>
          <Home />
          </div>
          </div>
      </div>
    );
  } else {
    return (
      <div className='App'>
        <Header />
        <Menu />
        <div className="container" style={{marginLeft:'230px' ,width:'85%' }}>
          <div>
          {show ? <SidebarMap /> : null}
          <div className="btnsidebar">
            <button className="btn" onClick={() => setShow(!show)}>
              - แสดงตาราง -
            </button>
          </div>
          <Home />
          </div>
          </div>
        
      </div>
    );
  }
}

export default MapEvent;

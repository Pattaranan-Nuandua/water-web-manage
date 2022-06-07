import React from "react";
import Home from "./pages/Home";
import Header1 from "./pages/Header1";
import Sidebar from "./pages/Sidebar";
import { useState } from "react";
import './Css/Map.css'
import Menu from "../Navbar/Menu-sidebar";
import Header from "../Navbar/Header";
// import PolygonMap from "./components/pages/Polygon";

function Map() {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <div className="Map">
                <Header1 />
                {show ? <Sidebar /> : null}
                <div className="btnsidebar">
                    <button className="btn1" onClick={() => setShow(!show)}>
                        - ซ่อนตาราง -
                    </button>
                </div>
                <Home />
                
            </div>
        );
    } else {
        return (
            <div className="Map">
                <Header1 />
                {show ? <Sidebar /> : null}
                <div className="btnsidebar">
                    <button className="btn1" onClick={() => setShow(!show)}>
                        - แสดงตาราง -
                    </button>
                </div>
                <Home />
                {/* <PolygonMap /> */}
                
            </div>
        );
    }
}

export default Map;

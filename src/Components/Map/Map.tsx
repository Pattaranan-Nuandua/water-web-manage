import React from "react";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Sidebar from "./pages/Sidebar";
import { useState } from "react";
import '../src/App.css'
// import PolygonMap from "./components/pages/Polygon";

function Map() {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <div className="App">
                <Header />
                {show ? <Sidebar /> : null}
                <div className="btnsidebar">
                    <button className="btn" onClick={() => setShow(!show)}>
                        - ซ่อนตาราง -
                    </button>
                </div>
                <Home />
            </div>
        );
    } else {
        return (
            <div className="App">
                <Header />
                {show ? <Sidebar /> : null}
                <div className="btnsidebar">
                    <button className="btn" onClick={() => setShow(!show)}>
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

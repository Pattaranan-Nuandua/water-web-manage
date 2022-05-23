
import * as React from "react";
import BtnFind from "../button/BtnFind";
import SBtnAdd from "../button/SBtnAdd";
import SBtnDelete from "../button/SBtnDelete";
import Search from "../button/Search";
import Test from "./test";
import './test.css'

function Vz() {
    return (
        <div className="bg-user">
            <h3 className="text-user">
                จัดการผู้ใช้
            </h3>
            <div className="frame-btn">
                <Search />
                <BtnFind />
                <SBtnAdd />
                <SBtnDelete />
            </div >
            <div className="Table">
                <Test />
            </div>
        
        </div>
    );
}

export default Vz;
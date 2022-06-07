import React from "react";
import './UserGroup.css'
import BtnFind from "../button/BtnFind";
import Search from "../button/Search";
import Header from "../Navbar/Header";
import Menu from "../Navbar/Menu-sidebar";
import GDeleteTable from "./Table/GDeleteTable";


function DeleteUsergroup(){
    return(
        <div className="bg-user">
            <h3 className="text-user">
                จัดการกลุ่มผู้ใช้
            </h3>
            <div className="frame-btn">
                <Search/>
                <BtnFind/>
            </div >
            <div className="Table">
                <GDeleteTable/>
                <Header/>
                <Menu/>
            </div>
        </div>
    );
}

export default DeleteUsergroup;
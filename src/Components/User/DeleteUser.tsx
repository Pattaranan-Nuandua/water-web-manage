import * as React from "react";
import './User.css'
import BtnFind from "../button/BtnFind";
import Search from "../button/Search";
import DeleteTable from "../Table/UserTable/SDeleteTable";
import Header from "../Navbar/Header";
import Menu from "../Navbar/Menu-sidebar";

function DeleteUser(){
    return(
        <div className="bg-user">
            <h3 className="text-user">
                จัดการผู้ใช้
            </h3>
            <div className="frame-btn">
                <Search/>
                <BtnFind/>
            </div >
            <div className="Table">
                <DeleteTable/>
                <Header/>
                <Menu/>
            </div>
        </div>
    );
}

export default DeleteUser;
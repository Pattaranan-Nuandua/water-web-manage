import * as React from "react";
import './User.css'
import BtnFind from "../button/BtnFind";
import Search from "../button/Search";
import DeleteTable from "../Table/UserTable/SDeleteTable";

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
            </div>
        </div>
    );
}

export default DeleteUser;
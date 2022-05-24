import React from "react";
import './User.css'
import BtnFind from "../button/BtnFind";
import Search from "../button/Search";
import DeleteTable from "../Table/UserTable/DeleteTable";

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
                <DeleteTable/>
            </div>
        </div>
    );
}

export default DeleteUsergroup;
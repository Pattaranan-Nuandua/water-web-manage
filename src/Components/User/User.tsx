import * as React from "react";
import './User.css'
import SBtnDelete from "../button/SBtnDelete";
import BtnFind from "../button/BtnFind";
import Search from "../button/Search";
import Header from "../Navbar/Header";
import Menu from "../Navbar/Menu-sidebar";
import UserTable from "./Table/SAddTable";
import { AddProps } from "./Table/interface2";
import { ResetPass } from "./Table/interface2";


function User() {
    const [adduser, setAddUser] = React.useState<AddProps["adduser"]>([]);
    const [resetpass, setResetPass] = React.useState<ResetPass["resetpass"]>([]);
    return (
        <div className="bg-user">
            <h3 className="text-user">
                จัดการผู้ใช้
            </h3>
            <div className="frame-btn">
                <Search />
                <BtnFind />
                <SBtnDelete />
            </div >
            <div className="Table">
                <UserTable 
                    adduser={adduser} setAddUser={setAddUser}
                    resetpass={resetpass} setResetPass={setResetPass} 
                />
            </div>
            <Header />
            <Menu />
        </div>
    );
}

export default User;
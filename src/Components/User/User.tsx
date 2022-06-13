import * as React from "react";
import './User.css'
import SBtnDelete from "../button/SBtnDelete";
import BtnFind from "../button/BtnFind";
import Search from "../button/Search";
import Header from "../Navbar/Header";
import Menu from "../Navbar/Menu-sidebar";
import { UserTable } from "./Table/SAddTable";
import { AddProps } from "../test/interface2";
import Table1 from "../test/test";


function User() {
    const [adduser, setAddUser] = React.useState<AddProps["adduser"]>([]);
    /*const [adduser, setAddUser] = React.useState<AddProps[]>([
        {username: "", firstname: "", lastname: "", usertype: "", usergroup: "", resetpassword: ""}
    ]);*/
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
                <Table1 adduser={adduser} setAddUser={setAddUser}
                />
            </div>
            <Header />
            <Menu />
        </div>
    );
}

export default User;
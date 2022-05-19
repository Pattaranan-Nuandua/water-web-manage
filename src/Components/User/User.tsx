import * as React from "react";
import './User.css'
import SBtnDelete from "../button/SBtnDelete";
import SBtnAdd from "../button/SBtnAdd";
import BtnFind from "../button/BtnFind";
import Search from "../button/Search";
import UserTable from "../Table/UserTable/UserTable";
import Sidebar from "../Navbar/Header";
import TablePaginationDemo from "./pagination";
import Left from "../Navbar/Menu-sidebar";

function User() {
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
                <UserTable />
                <TablePaginationDemo/>
            </div>
            <Sidebar />
            <Left/>
        </div>
    );
}

export default User;
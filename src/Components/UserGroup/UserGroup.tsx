import * as React from 'react';
import './UserGroup.css'
import GBtnDelete from "../button/GBtnDelete";
import GBtnAdd from "../button/GBtnAdd";
import BtnFind from "../button/BtnFind";
import Search from "../button/Search";
import Sidebar from '../Navbar/Header';
import Header from '../Navbar/Header';
import Menu from '../Navbar/Menu-sidebar';
import { UserGroupTable } from './Table/GAddTable';

function UserGroup(){
    return(

        <div>
            <h3 className="text-user" >
                จัดการกลุ่มผู้ใช้
            </h3>
            <div className="frame-btn">
                <Search/>
                <BtnFind/>
                <GBtnDelete/>
            </div >
            <div className="Table">
                <UserGroupTable onSubmit={({ id, group,details }) => {
                    console.log(id, group, details, );
                }} />
            </div>
            <Header/>
            <Menu/>
        </div>

    );
}

export default UserGroup;
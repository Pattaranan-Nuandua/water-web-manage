import * as React from 'react';
import './UserGroup.css'
import GBtnDelete from "../button/GBtnDelete";
import GBtnAdd from "../button/GBtnAdd";
import BtnFind from "../button/BtnFind";
import Sidebar from '../Navbar/Header';
import Header from '../Navbar/Header';
import Menu from '../Navbar/Menu-sidebar';
import  UserGroupTable  from './Table/GAddTable';
import { GroupProps } from "./Table/interface3";
import GSearch from '../button/Gsearch';

function UserGroup() {
    const [addusergroup, setAddUserGroup] = React.useState<GroupProps["addusergroup"]>([]);
    return (
            <div>
                <h3 className="text-user" >
                    จัดการกลุ่มผู้ใช้
                </h3>
                <div className="frame-btn">
                    <GSearch/>
                    <BtnFind/>
                    <GBtnDelete/>
                </div >
                <div className="Table">
                    <UserGroupTable addusergroup={addusergroup} setAddUserGroup={setAddUserGroup}/>
                </div>
                <Header/>
                <Menu/>
            </div>
    );
}
export default UserGroup;
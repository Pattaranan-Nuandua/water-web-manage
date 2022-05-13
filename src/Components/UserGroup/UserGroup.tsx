import './UserGroup.css'
import GBtnDelete from "../button/GBtnDelete";
import GBtnAdd from "../button/GBtnAdd";
import BtnFind from "../button/BtnFind";
import Search from "../button/Search";
import UserGroupTable from "../Table/UserGroupTable/UserGroupTable";
import Sidebar from '../Navbar/sidebar';

function UserGroup(){
    return(

        <div className="bg-user">
            <h3 className="text-user">
                จัดการกลุ่มผู้ใช้
            </h3>
            <div className="frame-btn">
                <Search/>
                <BtnFind/>
                <GBtnAdd/>
                <GBtnDelete/>
            </div >
            <div className="Table">
                <UserGroupTable/>
            </div>
            <Sidebar/>
        </div>

    );
}

export default UserGroup;
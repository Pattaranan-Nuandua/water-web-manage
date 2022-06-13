import * as React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './Components/User/User';
import UserGroup from './Components/UserGroup/UserGroup';
import DeleteUser from './Components/User/DeleteUser';
import DeleteUsergroup from './Components/UserGroup/DeleteUsergroup';
import { MyForm } from './Components/test/vz';
import { UserProps } from './Components/Login/interface1';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import Setting from './Components/Setting/setting';
import PageDevice from './Components/Device/PageDeviceTrue';
import PageDelete from './Components/Device/PageDeleteTrue';
import PageDetail from './Components/Device/DetailDevice';
import MapEvent from './Components/Map/page/MapEvent';
import Test from './Components/test/test';
import { AddProps } from "./Components/test/interface2";
import Table1 from './Components/test/test';


function App() {
  const [userList, setUserList] = React.useState<UserProps["userList"]>([]);
  const [adduser, setAddUser] = React.useState<AddProps["adduser"]>([]);
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login userList={userList} setUserList={setUserList} />} />
          <Route path="/login" element={<Login userList={userList} setUserList={setUserList} />} />
          <Route path="/signup" element={<Signup userList={userList} setUserList={setUserList} />} />
          <Route path='/map' element={<MapEvent />} />
          <Route path='/device' element={<PageDevice />} />
          <Route path='/delete' element={<PageDelete />} />
          <Route path='/detail' element={<PageDetail />} />
          <Route path="/user" element={<User />} />
          <Route path="/usergroup" element={<UserGroup />} />
          <Route path="/deleteuser" element={<DeleteUser />} />
          <Route path="/deleteusergroup" element={<DeleteUsergroup />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/test" element={<Table1 adduser={adduser} setAddUser={setAddUser}
          />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
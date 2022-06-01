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

function App() {
  const [userList, setUserList] = React.useState<UserProps["userList"]>([]);
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login userList={userList} setUserList={setUserList} />} />
          <Route path="/signup" element={<Signup userList={userList} setUserList={setUserList} />} />
          <Route path="/user" element={<User />} />
          <Route path="/usergroup" element={<UserGroup />} />
          <Route path="/test" element={<MyForm
            onSubmit={({ id, username, firstname, lastname, usertype, usergroup, resetpassword }) => {
              console.log(id, username, firstname, lastname, usertype, usergroup, resetpassword);
            }} />} />
          <Route path="/deleteuser" element={<DeleteUser />} />
          <Route path="/deleteusergroup" element={<DeleteUsergroup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
import * as React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './Components/User/User';
import Header from './Components/Navbar/Header';
import Menu from './Components/Navbar/Menu-sidebar';
import UserGroup from './Components/UserGroup/UserGroup';
import DeleteUser from './Components/User/DeleteUser';
import DeleteUsergroup from './Components/UserGroup/DeleteUsergroup';
import { Main } from './main';
import {MyForm} from './Components/test/vz';

const App = () => {
  return (

    <Router>
      <div className='App'>
        <Routes>
          <Route path="/user" element={<User />} />
          <Route path="/usergroup" element={<UserGroup />} />
          <Route path="/test" element={<MyForm 
          onSubmit={({ id,username, firstname, lastname, usertype, usergroup, resetpassword }) => {
            console.log(id,username, firstname, lastname, usertype, usergroup, resetpassword);
          }}/>} />
          <Route path="/deleteuser" element={<DeleteUser />} />
          <Route path="/deleteusergroup" element={<DeleteUsergroup />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
import * as React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './Components/User/User';
import Header from './Components/Navbar/Header';
import Menu from './Components/Navbar/Menu-sidebar';
import UserGroup from './Components/UserGroup/UserGroup';
import Vz from './Components/test/vz';
import DeleteUser from './Components/User/DeleteUser';
import DeleteUsergroup from './Components/UserGroup/DeleteUsergroup';
import { Main } from './main';
import View from './Components/test/vz';

function App() {
  return (
    
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/user" element={<User />} />
          <Route path="/usergroup" element={<UserGroup />} />
          <Route path="/test" element={<View />} />
          <Route path="/deleteuser" element={<DeleteUser />} />
          <Route path="/deleteusergroup" element={<DeleteUsergroup />} />
        </Routes>
      </div>
      
    </Router>
  );
}
export default App;
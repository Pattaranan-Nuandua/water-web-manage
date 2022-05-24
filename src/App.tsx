import * as React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './Components/User/User';
import Header from './Components/Navbar/Header';
import Menu from './Components/Navbar/Menu-sidebar';
import UserGroup from './Components/UserGroup/UserGroup';
import DeleteTable from './Components/Table/UserTable/SDeleteTable';
import Vz from './Components/test/vz';
import DeleteUser from './Components/User/DeleteUser';
import DeleteUsergroup from './Components/UserGroup/DeleteUsergroup';


function App() {
    return (
      <Router>
        <div className='App'>
          <Routes>
            
            <Route path="/user" element={<User/>}/>
            <Route path="/usergroup" element={<UserGroup/>}/>
            <Route path="/deletetable" element={<DeleteTable/>}/>
            <Route path="/test" element={<Vz/>}/>
            <Route path="/deleteuser" element={<DeleteUser/>}/>
            <Route path="/deleteusergroup" element={<DeleteUsergroup/>}/>
          </Routes>
        </div>
            <Header/>
            <Menu/>
      </Router>
    );
  }
export default App;
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Test from './Components/test/text';
import User from './Components/User/User';
import Header from './Components/Navbar/Header';
import Menu from './Components/Navbar/Menu-sidebar';
import UserGroup from './Components/UserGroup/UserGroup';
import DeleteTable from './Components/Table/UserTable/DeleteTable';
import * as React from 'react';
import Sidebar from './Components/test/Sidebar';

import Team from './Components/test/Team';
import Home from './Components/test/Home';




function App() {
    return (
      <Router>
        <div className='App'>
          <Routes>
            <Route path="/test" element={<Test/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/usergroup" element={<UserGroup/>}/>
            <Route path="/deletetable" element={<DeleteTable/>}/>
          </Routes>
        </div>
            
            <Menu/>  
      </Router>
    );
  }
export default App;
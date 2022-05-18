import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Test from './Components/test/text';
import User from './Components/User/User';
import Sidebar from './Components/Navbar/sidebar';
import Left from './Components/Navbar/left';
import UserGroup from './Components/UserGroup/UserGroup';
import DeleteTable from './Components/Table/UserTable/DeleteTable';


function App() {
    return (
      <Router>
        <div className='App'>
          <Routes>
            <Route path="/test" element={<Test/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/usergroup" element={<UserGroup/>}/>
            <Route path="/sidebar" element={<Sidebar/>}/>
            <Route path="/left" element={<Left/>}/>
            <Route path="/deletetable" element={<DeleteTable/>}/>
          </Routes>
        </div>
      </Router>
    );
  }
export default App;
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BasicTextFields from './Components/test/text';
import User from './Components/User/User';
import Sidebar from './Components/Navbar/sidebar';
import UserGroup from './Components/UserGroup/UserGroup';


function App() {
    return (
      <Router>
        <div className='App'>
          <Routes>
            <Route path="/BasicTextFields" element={<BasicTextFields/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/usergroup" element={<UserGroup/>}/>
            <Route path="/sidebar" element={<Sidebar/>}/>
          </Routes>
        </div>
      </Router>
    );
  }
export default App;

import './App.css';
import Navbar from './layout/Navbar';
import UserList from './pages/UserList';
import EditUser from './users/EditUser';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter  as Router,Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      

      <Router>
        <Navbar/>
        <Routes>
            <Route exact path = "/UserList" element = {<UserList/>}/>
            <Route exact path ="/addUsers" element= {<AddUser/>}/>
            <Route exact path= "/editUsers" element={<EditUser/>}/>
            <Route exact path = "/loginUser" element={<Login/>}/>
            <Route exact path = "/admin" element={<Admin/>}/>
            <Route exact path = "/Homepage" element={<Homepage/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

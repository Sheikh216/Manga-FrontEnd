
import './App.css';
import Navbar from './layout/Navbar';
import UserList from './pages/UserList';
import EditUser from './users/EditUser';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter  as Router,Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import ViewUser from './users/ViewUser';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Homepage from './pages/Homepage';
import ForgetPassword from './pages/ForgetPassword';

function App() {
  return (
    <div className="App">
      

      <Router>
        <Navbar/>
        <Routes>
            <Route exact path = "/" element = {<UserList/>}/>
            <Route exact path ="/addUsers" element= {<AddUser/>}/>
            <Route exact path= "/edituser/:id" element={<EditUser/>}/>
            <Route exact path= "/viewuser/:id" element={<ViewUser/>}/>
            <Route exact path = "/loginUser" element={<Login/>}/>
            <Route exact path = "/admin" element={<Admin/>}/>
            <Route exact path = "/Homepage" element={<Homepage/>}/>
            <Route exact path = "/forget" element={<ForgetPassword/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

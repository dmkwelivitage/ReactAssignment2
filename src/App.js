import './App.css';
import Nav from './components/Nav';
import React from 'react';
import { Routes,Route } from 'react-router';
import Login from './containers/Login';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Register from './pages/Register';
import Data from './pages/Data';
import Logout from './pages/Logout';

function App() {
    return (
    <div className="App">
          <Nav />
      <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Home' element={<Home />} />
              <Route path='/About Us' element={<AboutUs />} />
              <Route path='/Register' element={<Register />} />
                <Route path='/Data' element={<Data />} />
                <Route path='/Logout' element={<Logout />}/>
      </Routes> 
    </div>
  );
}

export default App;

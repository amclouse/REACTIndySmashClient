import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from '../src/home/Navbar'
// import { BrowserRouter as Router, } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, } from 'react-router-dom'; 
import Auth from './auth/Auth'
import Home from './home/home'
import TourneyCreate from './tournaments/TourneyCreate'
import TourneyIndex from './tournaments/TourneyIndex';

function App() {
  const [sessionToken, setSessionToken] = useState('')

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])
  
  const clearToken = () => {
    localStorage.clear();
    setSessionToken('')
    console.log(`${sessionToken} cleared`)
  }
 
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ?  
    <Router>
      <Home clickLogout={clearToken} token={sessionToken}/>
      {/* <TourneyIndex token={sessionToken}/> */}
      </Router>
    : <Auth updateToken={updateToken}/>)
  }

  return (
    <div className="App">
      {protectedViews()}
    </div>
  );
}

export default App;
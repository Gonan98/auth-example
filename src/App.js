import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Register from './components/Register';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('http://localhost:5000/api/profile',{
        headers: {
          'Content-Type': 'application/json',
          'authorization': token
        }
      }).then(res=>res.json())
        .then(user=>{
          setUser(user);
          setIsLoggedIn(true);
        })
        .catch(err=>{
          console.log(err);
          setIsLoggedIn(false);
          setUser({});
        });
    }
  },[isLoggedIn]);

  console.log('Usuario logueado:',isLoggedIn);

  return (
    <Router>
      <div>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/login">
            <Login setIsLoggedIn={setIsLoggedIn}/>
          </Route>
          <Route path="/register" component={Register} />
          <Route path="/profile">
            <Profile user={user}/>
          </Route>
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

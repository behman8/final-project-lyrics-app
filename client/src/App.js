import './App.css';
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import NavBar from './Containers/NavBar';
import SongsContainer from './Containers/SongsContainer';
import SongShow from './Components/SongShow';
import Login from './Components/Login';
import Home from './Components/Home';

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((resp) => {
      if(resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    });
  }, []);

  if(user) {
  return (
    <div>
      <NavBar/>
      <main>
        <h2>Welcome, {user.username}!</h2>
        <Routes>
          <Route exact path="/songs" element={<SongsContainer user={user} />}></Route>
          <Route exact path="/songs/:id" element={<SongShow />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </main>
    </div>
  );
  } else {
    <div>
      <NavBar/>
      {<Login onLogin={setUser} />}
      <main>
        <h2>Please login to view more!</h2>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </main>
    </div>
  }
}

export default App;

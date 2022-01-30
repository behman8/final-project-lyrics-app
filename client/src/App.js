import './App.css';
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import NavBar from './Containers/NavBar';
import SongsContainer from './Containers/SongsContainer';

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
          <Route exact path="/songs" element={<SongsContainer user={user} />}></Route>
          <Route exact path="/songs" element={<SongsContainer user={user} />}></Route>
        </Routes>
      </main>
    </div>
  );
  } else {

  }
}

export default App;

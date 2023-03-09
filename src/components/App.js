import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Missions from '../routes/missions';
import Profile from '../routes/profile';
import RocketsPage from '../routes/Rockets';
import Nav from './Nav';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<RocketsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

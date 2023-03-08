import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Missions from '../routes/missions';
import Profile from '../routes/profile';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

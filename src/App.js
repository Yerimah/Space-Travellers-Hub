import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Rockets from './Components/Rockets/Rockets';
import Missions from './Components/Missions/Missions';
import MyProfile from './Components/MyProfile/MyProfile';
import NavBar from './Components/NavBar/NavBar';
import Dragon from './Components/Dragon/Dragon';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route path="/dragon" element={<Dragon />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;

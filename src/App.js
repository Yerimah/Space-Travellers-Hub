import React from "react";
import Rockets from "./Components/Rockets/Rockets";
import Missions from "./Components/Missions/Missions";
import MyProfile from "./Components/MyProfile/MyProfile";
import NavBar from "./Components/NavBar/NavBar";
import Dragon from "./Components/Dragon/Dragon";


function App() {
  return (
    <div className="App">

      <NavBar />
      <Rockets />
      <Missions />
      <Dragon />
      <MyProfile />
      
    </div>
  );
}

export default App;

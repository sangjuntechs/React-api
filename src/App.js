import React from "react";
import Users from "./Users";
import Users2 from "./Users2";
import ClickUser from './ClickUser';

function App() {
  return (
    <div>
      <div>
        <ClickUser />
      </div>
      <div>
        <Users />
      </div>
      <div>
        <Users2 />
      </div>
    </div>
  );
}

export default App;

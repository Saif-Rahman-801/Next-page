import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <div>
      {/* Header Section */}
      <Header />
      <Outlet />
      {/* Footer Section */}
     
    </div>
  );
};

export default App;

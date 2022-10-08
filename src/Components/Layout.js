import React from "react";
import Home from "./Home";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <Home />
    </div>
  );
}

export default Layout;

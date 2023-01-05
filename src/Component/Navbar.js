import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="title">
      <span onClick={() => navigate("/")}>Where in the world?</span>
      <button className="toggleTheme">Dark Mode</button>
    </div>
  );
}

export default Navbar;

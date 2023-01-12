import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ toggleTheme, thisTheme }) {
  const navigate = useNavigate();

  return (
    <div
      className="title"
      style={{
        background: `${thisTheme?.titleBg}`,
        color: `${thisTheme?.textColor}`,
        boxShadow: `${thisTheme?.shadow}`,
      }}
    >
      <span onClick={() => navigate("/")}>Where in the world?</span>
      <button
        className="toggleTheme"
        style={{
          color: `${thisTheme?.textColor}`,
        }}
        onClick={toggleTheme}
      >
        Dark Mode
      </button>
    </div>
  );
}

export default Navbar;

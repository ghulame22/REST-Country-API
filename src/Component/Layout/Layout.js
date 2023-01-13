import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { Dark } from "../Dark";
import { Light } from "../Light";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [thisTheme, setThisTheme] = useState({});

  const toggleTheme = () => {
    if (theme === "Dark") {
      setTheme("Light");
      setThisTheme({ ...Light });
    } else {
      setTheme("Dark");
      setThisTheme({ ...Dark });
    }
  };
  useEffect(() => {
    setTheme("Dark");
    setThisTheme(Dark);
  }, []);

  return (
    <>
      <div>
        <Navbar toggleTheme={toggleTheme} thisTheme={thisTheme} />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;

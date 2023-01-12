import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
// import CardPage from "./Component/CardPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/CardPage" element={<CardPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

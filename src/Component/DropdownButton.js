import React, { useState } from "react";

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const regionList = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <div>
      <button className="DropdownButton" onClick={toggle}>
        Filter by Region
      </button>
      {isOpen && (
        <div className="list DropdownButton">
          {regionList.map((item, index) => <div className="listItem" key={index}>{item}</div>)}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;

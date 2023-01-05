import React, { useEffect, useState } from "react";

const DropdownButton = ({ regionList, regionFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  useEffect(() => {
    const filterSwitch = (e) => {
      if (e.path[0].tagName !== "BUTTON") {
        setIsOpen(isOpen);
      }
    };

    document.body.addEventListener("click", filterSwitch);

    return () => {
      document.body.removeEventListener("click", filterSwitch);
    };
  }, []);

  return (
    <div className="DDbtn">
      <button className="DropdownButton" onClick={toggle}>
        Filter by Region
      </button>
      {isOpen && (
        <div className="list">
          {regionList.map((item, index) => (
            <div className="listItem" key={index} onClick={()=>regionFilter(index)}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;

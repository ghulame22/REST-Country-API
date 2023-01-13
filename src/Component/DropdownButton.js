import React, { useEffect, useState } from "react";

const DropdownButton = ({ regionList, regionFilter, thisTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".DropdownButton")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="DDbtn">
      <button
        className="DropdownButton"
        onClick={toggle}
        style={{
          background: `${thisTheme?.inputBg}`,
          boxShadow: `${thisTheme?.shadow}`,
          color: `${thisTheme?.textColor}`,
        }}
      >
        Filter by Region
      </button>
      {isOpen && (
        <div
          className="list"
          style={{
            background: `${thisTheme?.inputBg}`,
            boxShadow: `${thisTheme?.shadow}`,
            color: `${thisTheme?.textColor}`,
          }}
        >
          {regionList?.map((item, index) => (
            <div
              className="listItem"
              key={index}
              onClick={() => regionFilter(index)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;

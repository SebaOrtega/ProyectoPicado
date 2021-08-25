import React, { useState } from "react";
import "../styles/Dropdown.css";

const Dropdown = ({ selected, setSelected, options }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dropdown" onClick={() => setIsActive(!isActive)}>
      <div className="dropdown-btn">
        {" "}
        <span className="fas fa-caret-down"></span>
        <p>{selected}</p>
      </div>

      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

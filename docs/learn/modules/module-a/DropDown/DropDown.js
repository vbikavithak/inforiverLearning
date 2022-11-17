import React, { useState } from "react";
import Link from "@docusaurus/Link";
import "./dropdown.css";
import Data from "./dropdownData.json";

const FunDropdown = ({ selected, setSelected }) => {
  const [isActive, setisActive] = useState(false);

  return (
    <div className="dropdown ">
      <div className="dropdown-btn"></div>
      <div className="dropdown-btn" onClick={(e) => setisActive(!isActive)}>
        <span> {selected}</span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {Data.map((samples) => (
            <Link to={samples.to}>
              <div
                className="dropdown-item"
                onClick={(e) => {
                  setSelected(samples.from);
                }}
              >
                {samples.from} {console.log(samples.from)}
              </div>
            </Link>
          ))}
        </div>
      )}
      <div className="dropdown-btn"></div>
    </div>
  );
};

export default FunDropdown;

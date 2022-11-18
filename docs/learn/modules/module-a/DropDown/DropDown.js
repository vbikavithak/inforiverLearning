import React, { useState } from "react";
import Link from "@docusaurus/Link";
import "./dropdown.css";
import Data from "./dropdownData.json";

let demo = "Choose one"

const FunDropdown = ({ selected, setSelected }) => {
  const [isActive, setisActive] = useState(false);
  setSelected(demo)



  return (
    <div className="dropdown ">

   
      <div className="dropdown-btn" onClick={(e) => setisActive(!isActive)}>
        <span> {selected}</span>
      </div>
      <div className="dropdown-box">
      {isActive && (
        <div className="dropdown-content">
          {Data.map((samples) => (
            <Link to={samples.to}>
              <div
                className="dropdown-item"
                onClick={(e) => {
                demo = samples.from
                  
                }}
              >
                {samples.from}
              </div>
            </Link>
          ))}
        </div>
      )}
      </div>
      
    </div>
  );
};

export default FunDropdown;

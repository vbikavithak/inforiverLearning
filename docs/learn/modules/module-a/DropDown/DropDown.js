import React, { useState } from "react";
import Link from "@docusaurus/Link";
import "./dropdown.css";
import Data from "./dropdownData.json";

let demo = {
  id: 1,
  from: "Export and Import",
  prev: "",
  next: "/learn/modules/module-a/audit",
};

const FunDropdown = () => {
  const [isActive, setisActive] = useState(false);

  function forPerev() {
    if (demo.id === 1) {
      demo.id = 1;
    } else {
      demo.id -= 1;

      Data.forEach((e) => {
        if (e.id === demo.id) {
          demo.prev = e.prev;
          demo.next = e.next;
          demo.from = e.from;
        }
      });
    }
  }

  function forNext() {
    if (demo.id === Data.length) {
      demo.id = Data.length;
    } else {
      demo.id += 1;
      console.log(demo.id);
      console.log(Data.length);
      Data.forEach((e) => {
        if (e.id === demo.id) {
          demo.next = e.next;
          demo.prev = e.prev;
          demo.from = e.from;
        }
      });
    }
  }

  return (
    <div className= "dropdown">
      <Link to={demo.prev}>
        <div className= {demo.prev==="" ? "disable-btn" : "button-24"} disabled={demo.prev === ""} onClick={forPerev}> &laquo; Previous</div>
      </Link>

      <div className="unit-selection">
      <button className="dropdown-btn" onClick={(e) => setisActive(!isActive)}>
        <div className="unit"> {demo.from}</div>
        <div class="arrow"></div>
      </button>
      </div>

        {isActive && (
      
            <div className="dropdown-content">
            {Data.map((samples) => (
              <Link to={samples.to}>
                <div
                  className="dropdown-item"
                  onClick={(e) => {
                    demo.from = samples.from;
                    demo.id = samples.id;
                    demo.next = samples.next;
                    demo.prev = samples.prev;
                  }}
                >
                  {samples.from}
                </div>
              </Link>
            ))}
          </div>
        )}
    
      <Link to={demo.next}>
        < div className= {demo.next==="" ? "disable-btn" : "button-24"} disabled = {demo.next === ""} onClick={forNext}>Next &raquo;</div>
      </Link>
    </div>
  );
};

export default FunDropdown;

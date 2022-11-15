import React, { useState } from "react";
import Link from "@docusaurus/Link";
import "./dropdown.css";

const FunDropdown = () => {

 
  const [isActive, setisActive] = useState(false);
  const [selected, setselected] = useState("Choose One");
  const [goPrev, setgoPrev] = useState("");
  const [goNext, setgoNext] = useState("");

 

  // const options = ["Introduction", "Overview", "Define Strategy", "Plan", "Ready","Adopt", "Knowledge check","Summary and resourcen"]
  const sample = [
    {
      from: "Export and Import",
      to: "/learn/modules/module-a/export-and-import",
      prev: "",
      next: "/learn/modules/module-a/audit",
    },
    {
      from: "Audit",
      to: "/learn/modules/module-a/audit",
      prev: "/learn/modules/module-a/export-and-import",
      next: "/learn/modules/module-a/themes",
    },
    {
      from: "Themes ",
      to: "/learn/modules/module-a/themes",
      prev: "/learn/modules/module-a/export-and-import",
      next: "/learn/modules/module-a/set-version",
    },
    {
      from: "Set Version",
      to: "/learn/modules/module-a/set-version",
      prev: "/learn/modules/module-a/themes",
      next: "/learn/modules/module-a/blend",
    },
    {
      from: "Blend",
      to: "/learn/modules/module-a/blend",
      prev: "/learn/modules/module-a/set-version",
      next: "/learn/modules/module-a/invert",
    },
    {
      from: "Invert",
      to: "/learn/modules/module-a/invert",
      prev: "/learn/modules/module-a/blend",
      next: "/learn/modules/module-a/aggregation",
    },
    {
      from: "Aggregation",
      to: "/learn/modules/module-a/aggregation",
      prev: "/learn/modules/module-a/invert",
      next: "/learn/modules/module-a/report",
    },
    {
      from: "Report+",
      to: "/learn/modules/module-a/report",
      prev: "/learn/modules/module-a/aggregation",
      next: "/learn/modules/module-a/template-row",
    },
    {
      from: "Template row",
      to: "/learn/modules/module-a/template-row",
      prev: "/learn/modules/module-a/report",
      next: "",
    },
  ];

  return (
    <div className="dropdown">
      <div className="dropdown-btn" >
        <button className="button" disabled = {goNext===""}><Link to={goPrev}>Previous</Link></button>
      </div>
      <div className="dropdown-btn" onClick={(e) => setisActive(!isActive)}>
        <span> {selected}</span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {sample.map((samples) => (
            <div
              onClick={(e) => {
                setisActive(false);
                setgoPrev(samples.prev);
                setgoNext(samples.next)
                
                setselected(samples.from);
              }} 
              className="dropdown-item"
               >
              <Link  to={samples.to} >


              

              {samples.from}</Link>
            </div>
          ))}
          
        </div>
      )}
      <div className="dropdown-btn">
        <button disabled = {goNext===""} className="button" ><Link to={goNext}>Next</Link></button>
      
     
      </div>
    </div>
  );
};

export default FunDropdown;

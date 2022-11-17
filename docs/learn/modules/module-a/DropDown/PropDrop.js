import React, { useState } from "react";
import FunDropdown from "./DropDown";

const ForFix = () => {
  const [selected, setselected] = useState("Choose One");
  return (
    <div>
      <FunDropdown selected={selected} setSelected={setselected} />
    </div>
  );
};

export default ForFix;

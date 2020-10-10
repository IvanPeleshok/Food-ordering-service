import React from "react";
import "./spinner.css";

const Spinner = () => {
  return (
    <div style={{display: "flex", justifyContent: "center", height: '100vh'}}>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;

import React from "react";

function ColourBtn({ colour, setcolour }) {
  return (
    <div
      className="colourBtn"
      onClick={() => setcolour(colour)}
      style={{ backgroundColor: colour }}
    ></div>
  );
}

export default ColourBtn;

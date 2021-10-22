import React, { useState } from "react";
const Class33 = () => {
  const purple = "#8e44ad";
  const [bg, setBg] = useState(purple);
  const [nameE, setNameE] = useState("Click That");
  const Eblo = () => {
    let newBg = "#34495e";
    setBg(newBg);
    setNameE("ouch!! :wow");
  };
  const bgBack = () => {
    setBg(purple);
    setNameE("Ayyow");
  };
  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onMouseEnter={Eblo} onMouseLeave={bgBack}>
          {nameE}
        </button>
      </div>
    </>
  );
};
export default Class33;

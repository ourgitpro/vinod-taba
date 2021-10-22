import React, { useState } from "react";

const Digital = () => {
  let newDigit = new Date().toLocaleTimeString();
  const [cTime, setCtime] = useState(newDigit);
  const updateDigit = () => {
    newDigit = new Date().toLocaleTimeString();
    setCtime(newDigit);
  };
  setInterval(updateDigit, 1000);

  return (
    <>
      <h1>{cTime}</h1>
    </>
  );
};
export default Digital;

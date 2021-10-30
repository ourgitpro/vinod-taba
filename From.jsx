import React, { useState } from "react";
const From = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  });
  //const [lastName, setLastName] = useState();
  //const [fullName, setFullName] = useState();
  //const [lastNameNew, setLastNameNew] = useState();
  const inputEvent = (event) => {
    console.log(event.target.value);
    //setName(event.target.value);
  };
  //const inputEventTwo = (event) => {
  //setLastName(event.target.value);
  // };
  const onSubmit = (event) => {
    event.preventDefault();
    // setFullName(name);
    //setLastNameNew(lastName);
    alert("form submitted");
  };

  return (
    /* <>
      <h1>Registration</h1>
      <form actin="">
        <div className={From.eblo}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className={From.eblo}>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className={From.eblo}>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" required />
        </div>
        <div className={From.eblo}>
          <button type="submit">Register</button>
        </div>
      </form>
    </>*/
    <>
      <div className="main_div">
        <form onSubmit={onSubmit}>
          <div>
            <h1>
              Hello{fullName.fname}
              {fullName.lname}
            </h1>
            <input
              type="text"
              placeholder="Enter your name"
              name="fName"
              onChange={inputEvent}
              value={fullName.fname}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Enter your last name"
              name="lName"
              onChange={inputEvent}
              value={fullName.lname}
            />
            <button type="submit">Click Me</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default From;

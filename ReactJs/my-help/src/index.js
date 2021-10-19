import React from "react";
import ReactDOM from "react-dom";
//import Card from "./Card";//netflix
//import { add, sub, mul, div } from "./Calc"; //class 21
//import Heading from "./Heading.jsx";
import App from "./App.jsx";
//import Eblo from "./Eblo.js";netflix
import "./index.css"; //netflix
//class 17 project
//let CurDate = new Date(2021, 10, 14, 19);
//CurDate = CurDate.getHours();
//let getting = "";
//const cssStyle = {};

//if (CurDate >= 1 && CurDate < 12) {
// getting = "Good Morning";
//cssStyle.color = "green";
//} else if (CurDate >= 12 && CurDate < 19) {
//getting = "Good Evening";
//cssStyle.color = "orange";
//} else {
//getting = "Good Night";
//cssStyle.color = "black";
//}

/*function Card(props) {
  console.log(props);
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="myPic" className="card_img" />
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card-title">{props.sname}</h3>
            <a href={props.link} target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}*/
//function ncard(val) {
//return (
//<Card
//imgsrc={val.imgsrc}
//title={val.title}
//sname={val.sname}
//link={val.link}
// />
//);
//}

ReactDOM.render(
  <App />,
  //<div>
  // <h1>
  //  Hello Sir,<span style={cssStyle}>{getting}</span>
  // </h1>
  // </div>,

  /* <div>
    <Heading />
    <Para />
    <Eblo />
  </div>,*/
  //class 21
  /*<>
    <ul>
      <li>The two no is {add(40, 4)}</li>
      <li>The two no is {sub(40, 4)}</li>
      <li>The two no is {mul(40, 4)}</li>
      <li>The two no is {div(40, 4)}</li>
    </ul>
  </>,*/
  /* <>
    <h1 className="heading_style">List of top 5 Netflix Series in 2021</h1>

    {Eblo.map((val, index) => {
      console.log(index);
      return (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })}
  </>,netflix*/

  document.getElementById("root")
);

// I create the digital watch just impressed by thapa thechnical, Dated: 5th of October, 2022

import React, { useState } from "react";
import "./App.css";

function App() {
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let dayName = days[new Date().getDay()];
  // alert(dayName);

  const [ctime, setCtime] = useState(time);
  const [cdate, setCdate] = useState(date);
  const [cdays, setCdays] = useState(dayName);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  const updateDate = () => {
    date = new Date().toLocaleDateString();
    setCdate(date);
  };
  const updateDay = () => {
    // date = new Date().toLocaleDateString();
    days = days[new Date().getDay()];
    setCdays(days);
  };
  setInterval(updateTime, 1000);
  setInterval(updateDate, 86400);
  setInterval(updateDay, 86400);

  return (
    <>
      <div className="container">
        <div className="row text-center align-items-center">
          <div className="col-8 mx-auto">
            <h5>Rizwan digital Watch React</h5>
          </div>
          <div className="col-md-6 sm-10 mx-auto time">
            <h4>{ctime}</h4>
          </div>
          <div className="col-md-6 sm-10 mx-auto date">
            <h4>{cdate}</h4>
          </div>
          <div className="col-md-6 sm-10 mx-auto day">
            <h4>{cdays}</h4>
          </div>
          <div className="col-8 mx-auto">
            <h5>Best of Luck</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

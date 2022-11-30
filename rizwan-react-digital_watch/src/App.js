// I create the digital watch just impressed by thapa thechnical, Dated: 5th of October, 2022

import React, {useState} from 'react';
import './App.css'

function App() {
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();
  
  const [ctime, setCtime] = useState(time)
  const [cdate, setCdate] = useState(date)

  const updateTime = ()=>{
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }
  const updateDate = ()=>{
    date = new Date().toLocaleDateString();
    setCdate(date);
  }
   setInterval(updateTime,1000);
   setInterval(updateDate,86400);

  return (
  <>
  <div>
    <h3>{ctime}</h3>
    <h4>{cdate}</h4>
    </div>
    </>
  );
}

export default App;

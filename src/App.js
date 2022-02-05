import React, { useState } from "react";
import personImg from "./images/image-jeremy.png";
import Cards from "./Cards.js";
function App() {
  const [Time, SetTime] = useState(1);
  let timeCategsIDSArr = ["daily-categ",  "weekly-categ", "monthly-categ"]
  const TimeChangeHundler = (val, id) => {
    for (let i = 0; i < timeCategsIDSArr.length; i++)  {
      document.getElementById(timeCategsIDSArr[i]).classList.remove("active-time-category");
      console.log(timeCategsIDSArr[i])
    }
    document.getElementById(id).classList.add("active-time-category")
    SetTime(val)
  }
  return (
    <main className="pagebody ">
      <div className="main-container">
        <div className="account-container w-full">
          <div className="person-info ">
            <img src={personImg} className="person-img " alt="person img" />
            <p>
              <span>Report for</span>
              Jeremy Robson
            </p>
          </div>
          <div className="time-categories">
          {/* z-10 */}
            <p className="time-category lg:mb-2" id="daily-categ" onClick={() => {TimeChangeHundler(0, 'daily-categ')}}>Daily</p>
            <p className="time-category active-time-category  lg:mb-2 " id="weekly-categ" onClick={() => {TimeChangeHundler(1, 'weekly-categ')}}>
              Weekly
            </p>
            <p className="time-category" id="monthly-categ" onClick={() => {TimeChangeHundler(2, "monthly-categ")}}>Monthly</p>
          </div>
        </div>
        <Cards Time={Time}/>
        <div className="bg-liteRed bg-softBlue bg-violet bg-softOrange bg-limeGreen bg-darkRed none"></div>
      </div>
    </main>
  );
}

export default App;

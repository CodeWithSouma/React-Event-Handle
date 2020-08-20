import React, { useState } from "react";

function App() {

  const [headingText,setHeadingText] = useState("Hello");

  function handelClick() {
    setHeadingText("Submitted");
  }

  const defaultButtonStyle = {
    color:"#50a3a2",
    backgroundColor:"white"
  }

  const customButtonStyle = {
    color:"white",
    backgroundColor:"black"
  }
  
  const [style,setStyle] = useState(defaultButtonStyle);
  
function changeStyle() {
  setStyle(customButtonStyle);
}

function restoreStyle() {
  setStyle(defaultButtonStyle);
}


  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={style} onClick={handelClick} onMouseOver={changeStyle} onMouseOut={restoreStyle}>Submit</button>
    </div>
  );
}

export default App;

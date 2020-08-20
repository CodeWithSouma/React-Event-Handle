import React, { useState } from "react";

function App() {

  const [name,setName] = useState("");
  const [headingText,setHeadingText] = useState(name);
  //when use type automatically name get updated with new value
  function handleChange(event) {
    setName(event.target.value);
  }

//set updated name value in to heading text
  function handelClick() {
    setHeadingText(name);
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
      <h1>Hello {headingText}!</h1>
      <input type="text" placeholder="What's your name?" onChange = {handleChange}/>
      <button style={style} 
          onClick={handelClick} 
          onMouseOver={changeStyle} 
          onMouseOut={restoreStyle}>Submit</button>
    </div>
  );
}

export default App;

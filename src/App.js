import React, { useState } from 'react'
import "./App.css";
import Card from "./Components/Card/Card.jsx";


function App() {
  const [status, setStatus] = useState(true)

  const kayaking = {
    title: "Kayaking",
    price: "26/6",
    location: "Windsor,Canada",
    background:'https://assets.codepen.io/1462889/sea.png',
    pic1:"https://assets.codepen.io/1462889/kayak.png",
    pic2:'https://assets.codepen.io/1462889/water.png'
  }
  const camping = {
    title: "Camping",
    price: '39/4',
    location: "Toronto, Canada",
    background:'https://assets.codepen.io/1462889/grass.png',
    pic1:'https://assets.codepen.io/1462889/camp.png',
    pic2:'https://assets.codepen.io/1462889/Ivy.png'
  }
  const handleDate=()=>{
  alert("In real version Date picker would be open ")
  }
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ margin: "0 0 5% 0" }}>
          
          <button className={`btn ${status ? "Selected" : "hide"}`} onClick={() => setStatus(!status)}>Kayaking</button>
          <button className={`btn ${!status ? "Selected" : "hide"}`} onClick={() => setStatus(!status)}>Camping</button>
        </div>
        <Card detail={status ? kayaking : camping} handleDate={handleDate}/>
      </header>
    </div>
  );
}

export default App;

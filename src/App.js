import React, { useState } from 'react'
import "./App.css";
import Card from "./Components/Card/Card.jsx";


function App() {
  const [status, setStatus] = useState(true)

  const kayaking = {
    title: "kayaking",
    price: "26/6",
    location: "Windsor,Canada"
  }
  const camping = {
    title: "Camping",
    price: '39/4',
    location: "Toronto, Canada"
  }
  const handleDate=()=>{
  alert("In real version Date picker would be open ")
  }
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ margin: "20px" }}>
          <button className={`btn ${status ? "Selected" : "hide"}`} onClick={() => setStatus(!status)}>Kayaking</button>
          <button className={`btn ${!status ? "Selected" : "hide"}`} onClick={() => setStatus(!status)}>Camping</button>
        </div>
        <Card detail={status ? kayaking : camping} handleDate={handleDate}/>
      </header>
    </div>
  );
}

export default App;

import React, {useState} from "react";

import First from "./components/first/first.jsx";
import Second from "./components/second/second.jsx";

function App() {
  const [change,  setChange] = useState(true)

  const reDirect = (value) => {
    console.log(value)
    setChange(value)
  }

  return (
    <div>
       {change ? <First onDirect={reDirect}/> : <Second onDirect={reDirect}/>}
    </div>
  );
}

export default App;
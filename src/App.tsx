import React, { useState } from 'react';
import './App.css';
import Axios from './Axios';
import Fetch from './Fetch';

function App() {

  const [comp,setComp]=useState<string>();

  const handleClickFetch=()=>{
    setComp("Fetch")
  }

  const handleClickAxios=()=>{
    setComp("Axios")
  }


  return (
    <div className="App">
     <button onClick={handleClickFetch}>Fetch</button>
     <button onClick={handleClickAxios}>Axios</button>

     {
     (comp === "Fetch") ? <Fetch /> : (comp === "Axios")? <Axios />: <h3>Click any button to call API</h3>
    
     }
     

    </div>
  );
}

export default App;
